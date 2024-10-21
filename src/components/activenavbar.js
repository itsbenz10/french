//import PropTypes from 'prop-types'

export const Navbaritem = (props) => {
    return (
        <button
            className = {`${props.className} ${
                props.isActive ? "text-yellow-500" : ""
            } px-2 md:pr-10 space-x-7 transition delay-50 md:space-x-10 hover:text-primary hover:cursor-pointer`}
        >
            {props.title}
        </button>
    )
}

// Navbaritem.PropTypes = {
//     className: PropTypes.string | undefined,
//     isActive: PropTypes.bool,
//     title: PropTypes.string
// }