'use client'
import { FiPhoneOutgoing } from "react-icons/fi"
const CallMe = () => (
    <a onClick={(e) => {
        e.preventDefault();
        window.location.href = ""
    }} className="px-5 flex items-center text-sm bg-secondary py-3 rounded-full text-white">
        <FiPhoneOutgoing className="mr-2 stroke-white" /> Call Now
    </a>
)

export default CallMe