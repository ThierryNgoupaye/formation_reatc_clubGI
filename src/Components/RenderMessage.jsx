import PropTypes from "prop-types";

export default function RenderMessage({message, handleChange}) {



    return (
        <div>
            <h1 className="flex justify-center mt-10 mb-10 text-2xl font-bold">{message}</h1>
            <div className="flex justify-center">
                <button
                    className="px-4 py-2 bg-blue-500 text-white font-bold hover:bg-blue-700 transitio-all duration-300 rounded-lg cursor-pointer"
                    onClick={handleChange}>
                    Afficher le message
                </button>
            </div>
        </div>
    )
}

PropTypes.RenderMessage = {
    message: PropTypes.string.isRequired,
    handleChange: PropTypes.func
}