import React, { useState } from "react";

function GifSearch({onSearch}) {

    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(input)
    }

    return (
        <div className="col-3">
            <form className="m-4" onSubmit={handleSubmit}>
                <label className="form-label m-2">Enter a Search Term</label>
                <input className="form-control m-2" value={input} onChange={ (e) => setInput(e.target.value)} type="text"required ></input>
                <input type="submit" className="btn btn-success m-2"/>
            </form>
        </div>
    )
}

export default GifSearch