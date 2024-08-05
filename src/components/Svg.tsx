import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    height={273.067}
    width={273.067}
    {...props}
  >
    <title>{"Cloud"}</title>
    <path
      d="M465.837 466.987c-18.882 0-37.65 7.775-51.002 21.127-8.412 8.412-14.604 18.973-18.038 30.358-8.254 1.558-16.05 5.587-21.993 11.53-7.748 7.748-12.258 18.634-12.258 29.59 0 10.957 4.51 21.846 12.258 29.593 7.747 7.748 18.636 12.258 29.593 12.258h187.436c6.994 0 13.946-2.878 18.89-7.823 4.946-4.945 7.823-11.897 7.823-18.89 0-6.994-2.877-13.942-7.822-18.887-4.915-4.915-11.812-7.784-18.762-7.82-1.356-12.67-7.097-24.867-16.115-33.885-10.384-10.384-24.98-16.431-39.666-16.431-3.565 0-7.123.366-10.619 1.054a70.714 70.714 0 0 0-8.723-10.647c-13.352-13.352-32.12-21.127-51.002-21.127z"
      style={{
        color: "#000",
        clipRule: "nonzero",
        display: "inline",
        overflow: "visible",
        visibility: "visible",
        colorInterpolation: "sRGB",
        fill: "gray",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: 1,
        marker: "none",
        colorRendering: "auto",
        imageRendering: "auto",
        shapeRendering: "auto",
        textRendering: "auto",
        
      }}
      transform="translate(-362.546 -406.215)"
    />
  </svg>
)

export default SvgComponent
