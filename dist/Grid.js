import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
var columnsOptions = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
};
var gapOptions = {
    2: "gap-2",
    4: "gap-4",
    5: "gap-6",
    6: "gap-8",
};
export function Grid(_a) {
    var data = _a.data, _b = _a.cols, cols = _b === void 0 ? 3 : _b, _c = _a.gap, gap = _c === void 0 ? 4 : _c, maxItems = _a.maxItems, renderItem = _a.renderItem, scrollable = _a.scrollable, footer = _a.footer, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.loadingComponent, loadingComponent = _f === void 0 ? _jsx("span", { children: "Loading..." }) : _f, hideFooter = _a.hideFooter, _g = _a.scrollDir, scrollDir = _g === void 0 ? "horizontal" : _g, _h = _a.scrollFit, scrollFit = _h === void 0 ? false : _h;
    var containerRef = useRef(null);
    var _j = useState(undefined), containerFit = _j[0], setContainerFit = _j[1];
    var visibleData = useMemo(function () {
        if (!maxItems)
            return data;
        return data === null || data === void 0 ? void 0 : data.slice(0, maxItems);
    }, [data, maxItems]);
    useEffect(function () {
        if (containerRef.current) {
            if (scrollDir === "vertical") {
                var tallestItem = Array.from(containerRef.current.children).reduce(function (maxHeight, child) {
                    return Math.max(maxHeight, child.offsetHeight);
                }, 0);
                setContainerFit(tallestItem);
                console.log(containerFit);
            }
            else if (scrollDir === "horizontal") {
                var widestItem = Array.from(containerRef.current.children).reduce(function (maxWidth, child) {
                    return Math.max(maxWidth, child.offsetWidth);
                }, 0);
                setContainerFit(widestItem);
            }
        }
    }, [visibleData, scrollDir]);
    console.log(containerFit);
    return (_jsxs("div", { className: "flex flex-col gap-[2rem]", children: [(data === null || data === void 0 ? void 0 : data.length) === 0 && _jsx("span", { children: "There is no data" }), ((loading || !data) && loadingComponent) || (_jsxs(_Fragment, { children: [_jsx("div", { ref: containerRef, style: {
                            maxHeight: scrollDir === "vertical" && scrollFit
                                ? containerFit
                                : undefined,
                            overflowY: scrollDir === "vertical" && scrollFit ? "auto" : undefined,
                            overflowX: scrollDir === "horizontal" && scrollFit ? "auto" : undefined,
                            maxWidth: scrollDir === "horizontal" && scrollFit ? "100%" : undefined,
                        }, className: "\n          w-full overflow-x-auto grid\n          ".concat(scrollable
                            ? scrollDir === "horizontal"
                                ? "grid-flow-col auto-cols-min"
                                : "auto-rows-min " +
                                    columnsOptions[cols]
                            : columnsOptions[cols], "\n          ").concat(gapOptions[gap], "\n          ").concat(className, "\n        "), children: visibleData === null || visibleData === void 0 ? void 0 : visibleData.map(function (item, index) { return renderItem(item, index); }) }), data && maxItems && !hideFooter && data.length > maxItems && (_jsx("a", { href: (footer === null || footer === void 0 ? void 0 : footer.href) || "", className: "place-self-center", children: footer
                            ? footer.text
                            : "View ".concat(data.length - visibleData.length, " more") }))] }))] }));
}
export default Grid;
