import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import * as types from '../constants/ActionTypes'


const addTodo = text => ({ type: types.ADD_TODO, text })
const deleteTodo = id => ({ type: types.DELETE_TODO, id })
const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
const completeAll = () => ({ type: types.COMPLETE_ALL })
const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

const App = ({todos, actions}) => ( //what are these params?? Dependency injection only?
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired, //state to props
  actions: PropTypes.object.isRequired //dispatch to props
}

const mapStateToProps = state => ({
  todos: state.todos
})


const mapDispatchToProps = dispatch => ({
    // actions: bindActionCreators(TodoActions, dispatch)
    actions: {
        addTodo: (text) => { dispatch(addTodo(text)) }  ,
        deleteTodo: (id) => { dispatch(deleteTodo(id))},
        editTodo: (id, text) => { dispatch(editTodo(id, text))},
        completeTodo: (id) => { dispatch(completeTodo(id))},
        completeAll: () => { dispatch(completeAll())},
        clearCompleted: () => { dispatch(clearCompleted())}
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)//passing App
