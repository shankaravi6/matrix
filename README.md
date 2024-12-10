Used Packages

API Fetch - Axios (https://axios-http.com/docs/intro)
Routes - React Router DOM (https://reactrouter.com/en/main)
Animation - React Awesome Reveal & Framer Motion (https://react-awesome-reveal.morello.dev/ & https://motion.dev/)
State management - Redux Toolkit (https://redux-toolkit.js.org/)
Validation - Formik & Yup (https://formik.org/docs/guides/validation & )
Carousel - React Splide (https://splidejs.com/) & React Slick (https://react-slick.neostack.com/)
CSS Framework - Tailwind (https://tailwindcss.com/) & Emotion (https://emotion.sh/docs/introduction)
UI Components - MUI & Styled Components (https://mui.com/material-ui/all-components/ & https://styled-components.com/)
Icons - MUI Icons & React Icons (https://mui.com/material-ui/material-icons/ & https://react-icons.github.io/react-icons/)
Charts - HighchartsRecharts (https://www.highcharts.com/ & https://recharts.org/en-US)
Internationalization (i18n) & Translation - react-i18next (https://react.i18next.com/) & Transformers.js (https://huggingface.co/docs/transformers.js/en/index)
Date & Time Format - DayJs & Moment (https://day.js.org/ & https://momentjs.com/)
Calender - Prime React Calender (https://primereact.org/calendar/)
Pills - Pilling.js (https://piling.js.org/docs/)
InfiniteScroll - React Infinite Scroll (https://www.npmjs.com/package/react-infinite-scroll-component)
MasonryLayout - React Responsive Masonry (https://www.npmjs.com/package/react-responsive-masonry)
Scroll - GSAP (https://gsap.com/resources/React/) & Lenis (https://lenis.darkroom.engineering/)
Loaders - React Loader Spinners (https://mhnpd.github.io/react-loader-spinner/)

React Pro

1. Use CONST declare only for freeze and could't changed values & make it captialize.
2. Single Responsibility Components and Principal [helpers & utils].
3. * Destructed Props.
    const {data, name} = props
    const ComponentName = ({data, name}) => {}
4. * Make sure resuable, sepreate, scable and dynamic components. Split small small components into 
   diff files.
5. Reusable functions.
   Without parameter <button onClick={handleSubmit}>Submit</button>
   With parameter    <button onClick={() => handleSubmit()}>Submit</button>
6. Implement 404 page component and route for error & invalid page.
7. * Lazy loading - Lazy, Suspense.
8. * Unique key values in map() method through index or unique id.
9. * Using component props types (prop-types).
10. Default boolean
    Don't - title == true
    Do - title, !title
11. Common functions returns use custom hooks (api fetch, global exception handling).
12. Don't write inline css, make it an object or module or using styled-component, stylex libraries.
13. Avoid props drilling - Use Context API, State management, React Query, Component Composition.
14. 
