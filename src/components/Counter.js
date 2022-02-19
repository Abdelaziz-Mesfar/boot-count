import React from 'react'

export default function Counter(props) {
  return (
    <div className=" border border-3 border-info rounded-3  bg-dark shadow-lg p-3 mb-4  rounded" id="divv"> 
      <h2 className="text-light">{props.countProp}</h2>
      <h4 className="text-light mb-3">Total taps: {props.tapsProp}</h4>
      <div className="d-flex justify-content-center">
        <span className="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Decrement by 1">
          <button className="btn btn rounded-pill text-light  py-2 px-4 my-2 mx-1" onClick={props.onDecrement}>Decrement -</button>
        </span>
        <span className="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Increment by 1">
          <button className="btn btn rounded-pill text-light  py-2 px-4 my-2 mx-1" onClick={props.onIncrement}>Increment +</button>
        </span>
      </div>
      <div className="d-flex justify-content-center">
        <span className="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Reset the counter"> 
          <button className="btn rounded-pill text-light py-2 px-4 my-2 mx-1" onClick={props.onReset} >Reset Count</button>
        </span>
        <span className="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Clear all">
          <button className="btn rounded-pill  text-light  py-2 px-4 my-2 mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal" id="resetAll"  >Reset All</button>
        </span>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Warning</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Are you sure you want to reset all ?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={props.onResetAll}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
