import React from "react";

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            aria-hidden="true"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path
                fill="currentColor"
                d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
            ></path>
        </svg>
    );
};

export default MinusIcon;
