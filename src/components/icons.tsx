type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  oracle: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 16 16"
      className="text-white bg-red-600 rounded-lg"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M5 6.25h6c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-1c0-.69.56-1.25 1.25-1.25z"
      />
    </svg>
    ),
}