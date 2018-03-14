import { Accessor, ComputedArcs, ComputedData, Datum, Object, Renderer, RendererAccessors } from "../typings";
import { Selection } from "d3-selection";
import { Pie, PieArcDatum } from "d3-shape";
export declare const approxZero: (y: (x: number) => number, initialX: number) => number;
export declare const assignOptions: (ctx: Renderer, options: Object<any>) => void;
export declare const defaultAccessors: (ctx: Renderer) => RendererAccessors;
export declare const assignAccessors: (ctx: Renderer, customAccessors: Partial<RendererAccessors>) => void;
export declare const computeTranslate: (drawingDims: {
    width: number;
    height: number;
}, yOffset?: number) => [number, number];
export declare const translateBack: (point: [number, number], currentTranslation: [number, number]) => [number, number];
export declare const textAttributes: (computed: ComputedArcs) => Object<any>;
export declare const percentageString: (d: PieArcDatum<Datum>) => string;
export declare const translateString: (values: [number, number]) => string;
export declare const createArcGroups: (el: Selection<any, any, any, any>, data: PieArcDatum<Datum>[], key: Accessor<Datum | PieArcDatum<Datum>, string>) => Selection<any, any, any, any>;
export declare const exitArcs: (arcs: Selection<any, any, any, any>, duration: number, path: any) => void;
export declare const enterArcs: (arcs: Selection<any, any, any, any>, mouseOverHandler: any, mouseOutHandler: any) => void;
export declare const updateTotal: (el: Selection<any, any, any, any>, label: string, duration: number, options: {
    minTotalFontSize: number;
    innerRadius: number;
    yOffset: string;
}) => void;
export declare const computeTotal: (data: Datum[], valueAccessor: Accessor<Datum | PieArcDatum<Datum>, number>) => number;
export declare const calculatePercentages: (data: Datum[], valueAccessor: Accessor<Datum | PieArcDatum<Datum>, number>, total: number) => void;
export declare const layout: (valueAccessor: Accessor<any, number>, angleRange: [number, number]) => Pie<any, any>;
export declare const removeArcTween: (computed: ComputedData, angleRange: [number, number]) => (d: PieArcDatum<Datum>, i: number) => (t: number) => string;
export declare const updateFilteredPathAttributes: (selection: Selection<any, any, any, any>, filterFunc: Accessor<Datum | PieArcDatum<Datum>, boolean>, path: any, shadowDef?: string) => void;
