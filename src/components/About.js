import React, {useState} from 'react'

export default function About(props) {
  
  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'#423c3c':'white',
    border: '1px solid',
    borderColor: props.mode==='dark'?'f8f9fa':'#6c757d'
  }
  return (
    <div className="container">
      <h1 className="my-4" style={{color:props.mode==='dark'?'white':'black'}}>About Textutils Software</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text!</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a utility based application that instantly gives the user the information about the word count, character count, average time to go through the given text. It also provides the user with the preview of the entered text before manipulation.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Manipulate your Text!</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils can be used to manipulate the entered text by the user in several different ways. The user can convert the text to uppercase or lowercase, can remove the extra spaces and many more , very quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This software works properly on any web browsers such as Chrome, Internet Explorer, Firefox, Opera etc.It suits to count characters in facebook, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
