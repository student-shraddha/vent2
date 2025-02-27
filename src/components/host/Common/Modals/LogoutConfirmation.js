// import MediumButtonOrange from '@/Utils/Buttons/MediumButtonOrange'
// import CloseSvg from '@/Utils/Images and Svgs/CloseSvg'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import CloseSvg from '../../utils/Images/CloseSvg'
import CommonButton from '../Buttons/CommonButton'
import { useRouter } from 'next/router'

// Common modal for confirmation to delete data
function LogoutConfirmation({ isOpen, setOpen, data, header = '', OnDelete }) {
    const closeModal = () => { setOpen(false) }

    const router = useRouter();
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"

                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full mb-10 max-w-md transform overflow-hidden relative rounded-2xl bg-white  p-4 text-left align-middle shadow-xl transition-all">

                                <div className="mt-3 flex flex-col ">


                                    <div className='mt-3 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="199" height="201" viewBox="0 0 199 201" fill="none">
                                            <path d="M198.233 68.5201C198.501 71.8891 198.045 74.8792 197.59 77.9511C197.445 78.9304 197.261 79.8989 197.038 80.8546C196.937 81.2847 196.837 81.7069 196.737 82.1301C195.443 87.5927 192.929 92.566 189.291 96.5955C189.175 96.7235 189.058 96.8514 188.938 96.9794C185.447 100.679 181.642 103.996 177.047 106.477C172.504 109.207 167.615 111.474 162.531 113.721C161.881 114.009 161.241 114.318 160.614 114.646C158.602 115.697 156.724 116.697 155.007 117.951C147.944 122.607 144.026 129.557 141.562 137.362C140.331 141.264 139.455 145.373 138.711 149.504C138.643 181.977 108.324 205.731 75.2262 199.158C73.92 198.849 72.8464 198.319 71.5835 197.869C67.5462 196.255 63.8715 193.999 60.6029 190.96C55.0783 185.742 51.8952 179.48 49.5623 172.801C48.7846 170.575 48.1015 168.302 47.4575 166.006C45.5829 159.155 44.0447 151.835 38.7785 146.448C30.8792 138.368 20.6733 134.564 11.2396 127.985C-3.69642 117.589 -2.6669 97.9193 7.99468 87.9303C9.6671 86.2482 11.3474 84.8073 13.0696 83.2227C21.9898 75.6844 34.1588 74.9885 45.7392 72.4561C52.5966 70.8035 58.7191 67.2534 61.4272 60.6029C67.2654 47.0016 71.1265 33.1278 80.4654 22.2018C81.7568 20.5522 83.113 18.9577 84.5343 17.438C88.798 12.879 93.6474 8.98244 99.1128 6.22163C101.299 5.1183 103.584 4.19507 105.969 3.48445C131.68 -5.27626 165.15 3.83484 182.393 30.2952C185.529 35.1061 188.475 39.9968 190.852 45.1257C192.768 49.3461 194.537 53.5045 195.936 58.0645C196.319 59.4966 196.746 60.7869 197.106 62.216C197.701 64.5388 198.084 66.6569 198.233 68.5201Z" fill="#9E7B74" fill-opacity="0.6" />
                                            <path d="M60.3822 43.249C57.8283 46.9576 54.5064 49.5097 51.1754 50.6504C47.8443 51.7902 44.4779 51.5274 41.822 49.6111C39.1661 47.6948 37.7222 44.4871 37.5627 40.8376C37.4031 37.187 38.5516 33.0867 41.0905 29.381C43.6294 25.6763 47.0903 23.0622 50.6009 21.8476C54.1114 20.6321 57.6347 20.8299 60.2918 22.7482C62.9491 24.6665 64.2547 27.9352 64.2459 31.6556C64.2371 35.376 62.9361 39.5403 60.3822 43.249Z" fill="#9E7B74" fill-opacity="0.6" />
                                            <path d="M175.683 133.42C178.801 139.594 174.63 147.27 168.059 150.515C164.577 152.256 160.871 152.652 157.643 151.948C154.415 151.243 151.647 149.452 150.09 146.73C148.533 144.009 148.478 140.872 149.647 138.003C152.309 131.591 160.317 127.932 167.617 128.664C171.135 129.052 174.14 130.631 175.683 133.42Z" fill="#9E7B74" fill-opacity="0.6" />
                                            <mask id="mask0_458_2364" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="199" height="201">
                                                <path d="M167.617 128.663C160.317 127.932 152.309 131.59 149.647 138.002C148.478 140.872 148.533 144.008 150.091 146.73C151.647 149.451 154.415 151.242 157.643 151.947C160.871 152.652 164.578 152.255 168.059 150.514C174.63 147.269 178.801 139.593 175.683 133.42C174.14 130.631 171.136 129.052 167.617 128.663ZM64.2458 31.6554C64.2546 27.935 62.949 24.6663 60.2918 22.748C57.6346 20.8297 54.1113 20.6319 50.6008 21.8474C47.0903 23.062 43.6294 25.6761 41.0904 29.3808C38.5516 33.0865 37.4031 37.1868 37.5626 40.8374C37.7222 44.4869 39.166 47.6945 41.8219 49.6109C44.4779 51.5272 47.8443 51.79 51.1753 50.6502C54.5063 49.5095 57.8282 46.9574 60.3821 43.2487C62.936 39.5401 64.2371 35.3758 64.2458 31.6554ZM198.233 68.5201C198.501 71.8891 198.045 74.8792 197.59 77.9511C197.445 78.9304 197.261 79.8989 197.038 80.8546C196.937 81.2847 196.837 81.7069 196.737 82.1301C195.443 87.5927 192.929 92.566 189.291 96.5955C189.175 96.7235 189.058 96.8514 188.938 96.9794C185.447 100.679 181.642 103.996 177.047 106.477C172.504 109.207 167.615 111.474 162.531 113.721C161.881 114.009 161.241 114.318 160.614 114.646C158.602 115.697 156.724 116.697 155.007 117.951C147.944 122.607 144.026 129.557 141.562 137.362C140.331 141.264 139.455 145.373 138.711 149.504C138.643 181.977 108.324 205.731 75.2262 199.158C73.92 198.849 72.8464 198.319 71.5835 197.869C67.5462 196.255 63.8715 193.999 60.6029 190.96C55.0783 185.742 51.8952 179.48 49.5623 172.801C48.7846 170.575 48.1015 168.302 47.4575 166.006C45.5829 159.155 44.0447 151.835 38.7785 146.448C30.8792 138.368 20.6733 134.564 11.2396 127.985C-3.69642 117.589 -2.6669 97.9193 7.99468 87.9303C9.6671 86.2482 11.3474 84.8073 13.0696 83.2227C21.9898 75.6844 34.1588 74.9885 45.7392 72.4561C52.5966 70.8035 58.7191 67.2534 61.4272 60.6029C67.2654 47.0016 71.1265 33.1278 80.4654 22.2018C81.7568 20.5522 83.113 18.9577 84.5343 17.438C88.798 12.879 93.6474 8.98244 99.1128 6.22163C101.299 5.1183 103.584 4.19507 105.969 3.48445C131.68 -5.27626 165.15 3.83484 182.393 30.2952C185.529 35.1061 188.475 39.9968 190.852 45.1257C192.768 49.3461 194.537 53.5045 195.936 58.0645C196.319 59.4966 196.746 60.7869 197.106 62.216C197.701 64.5388 198.084 66.6569 198.233 68.5201Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_458_2364)">
                                                <path d="M136.926 162.765H68.1965C61.3919 162.765 55.8757 157.248 55.8757 150.444V67.8574C58.2631 66.004 60.1972 63.6232 61.4271 60.6025C64.9891 52.3044 67.8154 43.9039 71.5985 36.1333H151.622C158.426 36.1333 163.943 41.65 163.943 48.454V113.094C163.474 113.304 163.004 113.512 162.531 113.721C161.881 114.008 161.241 114.317 160.614 114.646C158.602 115.696 156.724 116.696 155.007 117.95C147.944 122.607 144.026 129.556 141.562 137.361C140.331 141.264 139.455 145.373 138.711 149.504C138.701 154.122 138.08 158.561 136.926 162.765Z" fill="#9E7B74" />
                                                <path d="M160.758 152.277C161.771 152.277 162.808 152.176 163.849 151.966V151.967C162.808 152.176 161.771 152.277 160.758 152.277ZM149.691 137.899C151.943 132.612 157.839 129.221 163.943 128.655C157.839 129.222 151.943 132.612 149.691 137.899Z" fill="#D9D9F6" />
                                                <path d="M160.755 152.277C160.754 152.277 160.754 152.277 160.753 152.277C159.713 152.277 158.696 152.17 157.722 151.964C157.705 151.96 157.687 151.956 157.669 151.953C157.66 151.951 157.652 151.949 157.643 151.947C154.415 151.242 151.647 149.451 150.091 146.729C149.239 145.241 148.837 143.629 148.839 142.004C148.84 140.657 149.117 139.302 149.647 138.002C149.661 137.967 149.676 137.933 149.691 137.899C151.943 132.612 157.839 129.222 163.943 128.655V150.444C163.943 150.959 163.91 151.467 163.849 151.966C162.808 152.176 161.772 152.277 160.758 152.277C160.757 152.277 160.756 152.277 160.755 152.277Z" fill="#9E7B74" />
                                                <path d="M55.8818 48.0605C56.0369 43.1354 59.0822 38.9386 63.3779 37.1119C62.7339 39.1955 61.7333 41.286 60.382 43.2486C59.054 45.1767 57.5183 46.7928 55.8818 48.0605Z" fill="#9E7B74" />
                                            </g>
                                            <path d="M142.746 155H59.3208C52.5163 155 47 149.483 47 142.679V40.6904C47 33.8853 52.5163 28.3687 59.3208 28.3687H142.746C149.55 28.3687 155.067 33.8853 155.067 40.6904V142.679C155.067 149.483 149.55 155 142.746 155Z" fill="#F5F5F5" />
                                            <g clipPath="url(#clip0_458_2364)">
                                                <mask id="mask1_458_2364" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="71" y="62" width="60" height="60">
                                                    <path d="M131 62H71V122H131V62Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask1_458_2364)">
                                                    <mask id="mask2_458_2364" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="71" y="62" width="60" height="60">
                                                        <path d="M71 62H131V122H71V62Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask2_458_2364)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M71 112.625C71 117.803 75.1973 122 80.375 122H103.93C109.107 122 113.305 117.803 113.305 112.625V107.938C113.305 106.643 112.255 105.594 110.961 105.594C109.667 105.594 108.617 106.643 108.617 107.938V112.625C108.617 115.214 106.519 117.313 103.93 117.313H80.375C77.7862 117.313 75.6875 115.214 75.6875 112.625V71.375C75.6875 68.7862 77.7862 66.6875 80.375 66.6875H103.93C106.519 66.6875 108.617 68.7862 108.617 71.375V76.0625C108.617 77.3569 109.667 78.4063 110.961 78.4063C112.255 78.4063 113.305 77.3569 113.305 76.0625V71.375C113.305 66.1973 109.107 62 103.93 62H80.375C75.1973 62 71 66.1973 71 71.375V112.625Z" fill="#333333" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M93.9688 92.1172C93.9688 93.4116 95.0181 94.4609 96.3125 94.4609H128.07C129.365 94.4609 130.414 93.4116 130.414 92.1172C130.414 90.8228 129.365 89.7734 128.07 89.7734H96.3125C95.0181 89.7734 93.9688 90.8228 93.9688 92.1172Z" fill="#333333" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M120.721 101.509C121.636 102.424 123.12 102.424 124.035 101.509L129.284 96.2604C129.284 96.2604 129.284 96.2604 129.284 96.2604C131.572 93.9721 131.572 90.2623 129.284 87.974C129.284 87.974 129.284 87.974 129.284 87.974L124.035 82.7255C123.12 81.8102 121.636 81.8102 120.721 82.7255C119.806 83.6408 119.806 85.1248 120.721 86.0401L125.969 91.2886C126.427 91.7462 126.427 92.4881 125.969 92.9458L120.721 98.1943C119.806 99.1096 119.806 100.594 120.721 101.509Z" fill="#333333" />
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_2364">
                                                    <rect width="60" height="60" fill="white" transform="translate(71 62)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className='text-center'>
                                        <div className='font-Nunito text-2xl font-bold mt-4'>
                                            Logout?
                                        </div>
                                        <div className='font-Nunito text-sm font-medium mt-2'>
                                            Are you sure you want to Logout of this account?
                                        </div>
                                        <div className="flex items-center justify-center gap-3 pt-4">
                                            <CommonButton className={'font-Nunito text-sm font-bold px-4 py-2.5 cursor-pointer rounded-lg transition bg-white text-black border-1 border-[#FF7960] border-solid'} onClick={closeModal}>Cancel</CommonButton>
                                            <CommonButton className={'font-Nunito text-sm font-bold px-4 py-2.5 cursor-pointer rounded-lg border transition bg-[#FF7960] text-white'} onClick={() => { router.push('/auth/logout') }}>Logout</CommonButton>
                                        </div>
                                    </div>
                                </div>


                                <div className='absolute top-4 right-4 cursor-pointer' onClick={closeModal}>
                                    <CloseSvg className={'fill-[#BABABA] '} />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LogoutConfirmation