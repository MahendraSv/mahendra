type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg width="178" height="60" viewBox="0 0 178 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 49V9L22 28.8333L2 9V49" stroke="#317773" strokeWidth="3"/>
      <path d="M2 2L22 21.8333L42 2" stroke="#317773" strokeWidth="3"/>
      <path d="M36 17C36 15.8954 36.8954 15 38 15V49H36V17Z" fill="#317773"/>
      <path d="M8 17C8 15.8954 7.10457 15 6 15V49H8V17Z" fill="#317773"/>
      <path d="M51.704 31.556V38.08H58.816V40.18H51.704V46.9H59.656V49H49.156V29.456H59.656V31.556H51.704ZM66.0595 46.928H72.8915V49H63.5115V29.484H66.0595V46.928ZM78.1454 31.556V38.08H85.2574V40.18H78.1454V46.9H86.0974V49H75.5974V29.456H86.0974V31.556H78.1454ZM109.749 29.624V49H107.201V34.552L100.761 49H98.9689L92.5009 34.524V49H89.9529V29.624H92.6969L99.8649 45.64L107.033 29.624H109.749ZM116.618 31.556V38.08H123.73V40.18H116.618V46.9H124.57V49H114.07V29.456H124.57V31.556H116.618ZM143.77 49H141.222L130.974 33.46V49H128.426V29.456H130.974L141.222 44.968V29.456H143.77V49ZM160.125 29.484V31.556H154.805V49H152.257V31.556H146.909V29.484H160.125ZM169.449 49.196C168.161 49.196 167.004 48.972 165.977 48.524C164.969 48.0573 164.176 47.4227 163.597 46.62C163.019 45.7987 162.72 44.856 162.701 43.792H165.417C165.511 44.7067 165.884 45.4813 166.537 46.116C167.209 46.732 168.18 47.04 169.449 47.04C170.663 47.04 171.615 46.7413 172.305 46.144C173.015 45.528 173.369 44.744 173.369 43.792C173.369 43.0453 173.164 42.4387 172.753 41.972C172.343 41.5053 171.829 41.1507 171.213 40.908C170.597 40.6653 169.767 40.404 168.721 40.124C167.433 39.788 166.397 39.452 165.613 39.116C164.848 38.78 164.185 38.2573 163.625 37.548C163.084 36.82 162.813 35.8493 162.813 34.636C162.813 33.572 163.084 32.6293 163.625 31.808C164.167 30.9867 164.923 30.352 165.893 29.904C166.883 29.456 168.012 29.232 169.281 29.232C171.111 29.232 172.604 29.6893 173.761 30.604C174.937 31.5187 175.6 32.732 175.749 34.244H172.949C172.856 33.4973 172.464 32.844 171.773 32.284C171.083 31.7053 170.168 31.416 169.029 31.416C167.965 31.416 167.097 31.696 166.425 32.256C165.753 32.7973 165.417 33.5627 165.417 34.552C165.417 35.2613 165.613 35.84 166.005 36.288C166.416 36.736 166.911 37.0813 167.489 37.324C168.087 37.548 168.917 37.8093 169.981 38.108C171.269 38.4627 172.305 38.8173 173.089 39.172C173.873 39.508 174.545 40.04 175.105 40.768C175.665 41.4773 175.945 42.448 175.945 43.68C175.945 44.632 175.693 45.528 175.189 46.368C174.685 47.208 173.939 47.8893 172.949 48.412C171.96 48.9347 170.793 49.196 169.449 49.196Z" fill="black"/>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};