import { HashLink as Link } from "react-router-hash-link";

const SubmissionEventsBox = ({link, name, info}) => {
    return (
        <Link to = {link} onClick = {() => window.scrollTo(0,0)}>
            <div className = "transform transition duration-200 hover:text-white p-3 text-lg bg-gradient-to-r from-gradient-start to-gradient-stop rounded-xl box-border my-3 text-center flex items-center justify-center">
                {name}<br></br>{info}
            </div>
        </Link>
    )
}

export default SubmissionEventsBox
