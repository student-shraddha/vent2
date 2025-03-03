import React from 'react'

function Step1SVG({ height = '20px', width = '20px', className, stroke, fill }) {
    return (
        <div style={{ height, width }} className={`bg-transparent ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.9846 21.41L16.6493 22.7808C15.6433 23.1779 14.8397 23.4801 14.2413 23.6879C13.6422 23.8963 12.9462 24 12.1531 24C10.9352 24 9.98792 23.7017 9.3123 23.1091C8.63668 22.5141 8.29876 21.7602 8.29876 20.8456C8.29876 20.4915 8.32328 20.1274 8.37426 19.7563C8.42567 19.3849 8.5074 18.9665 8.61925 18.4989L9.8765 14.0489C9.98835 13.6228 10.0834 13.2191 10.1596 12.8373C10.2368 12.4578 10.274 12.1087 10.274 11.7945C10.274 11.2262 10.1563 10.8287 9.9221 10.6052C9.68786 10.3824 9.24089 10.2692 8.57731 10.2692C8.2523 10.2692 7.91825 10.3213 7.57775 10.4219C7.23574 10.523 6.94342 10.6207 6.698 10.7115L7.0342 9.33956C7.85781 9.00422 8.64507 8.71706 9.39812 8.47874C10.1512 8.23976 10.8627 8.12017 11.5358 8.12017C12.7453 8.12017 13.6786 8.41249 14.334 8.99712C14.9894 9.58219 15.317 10.3406 15.317 11.2752C15.317 11.4686 15.2955 11.8093 15.2492 12.2963C15.2041 12.7844 15.1199 13.2315 14.9973 13.6383L13.7455 18.0704C13.6429 18.4264 13.5506 18.8333 13.4704 19.2913C13.3875 19.7462 13.348 20.0938 13.348 20.327C13.348 20.9155 13.4792 21.3173 13.7422 21.5309C14.0072 21.7445 14.4637 21.8507 15.112 21.8507C15.4164 21.8507 15.7627 21.7967 16.1475 21.6907C16.5312 21.5847 16.811 21.4915 16.9846 21.41ZM17.3021 2.80273C17.3021 3.57493 17.0111 4.23442 16.4262 4.77668C15.8429 5.32088 15.14 5.5932 14.3176 5.5932C13.4927 5.5932 12.7881 5.32088 12.1981 4.77668C11.6091 4.23421 11.314 3.57493 11.314 2.80273C11.314 2.03203 11.6091 1.37147 12.1981 0.82232C12.787 0.274035 13.4929 0 14.3176 0C15.1397 0 15.8429 0.27468 16.4262 0.82232C17.0115 1.37147 17.3021 2.03225 17.3021 2.80273Z" fill="white" />
            </svg>
        </div >

    )
}
export default Step1SVG