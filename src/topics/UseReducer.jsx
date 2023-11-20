import {useReducer} from "react";

const UseReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case('SET_NAME'):
        return { ...state, name: action.payload }
      case('ADD_NAME'):
        return { name: "", names: [...state.names, state.name]}
    }
  }, {
    names: [],
    name: "",
  })

  const [altState, altDispatch] = useReducer((state, action) => ({
    ...state,
    ...action,
  }), {
    first: "",
    last: "",
  });

  return (
    <>
      <ul>
        {state.names.map(name =>
          <li key={name}>{name}</li>
        )}
      </ul>
      <input
        type='text'
        value={state.name}
        onChange={(event) => dispatch({ type: 'SET_NAME', payload: event.target.value })}
      />
      <button onClick={() => dispatch({ type: 'ADD_NAME' })} >
        Add Name
      </button>
      <hr/>
      <input
        type="text"
        value={altState.first}
        onChange={event => altDispatch({ first: event.target.value })}
      />
    </>
  )
}

export default UseReducer;