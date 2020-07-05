import AdventureStudent from 'pages/AdventureStudent'
import CreateAdventure from 'pages/CreateAdventure'
import TeacherArea from 'pages/TeacherArea'
import StudentArea from 'pages/StudentArea'
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import AdventurePhase from 'pages/AdventurePhase'
import AdventureTask from 'pages/AdventureTask'

const Routes = () => {
  return (
    <div>
      <Route component={Home} path="/" exact/>
      <Route component={TeacherArea} path="/teacher-area" exact/>
      <Route component={StudentArea} path="/student-area" exact/>
      <Route component={CreateAdventure} path="/create-adventure" exact/>
      <Route component={AdventureStudent} path="/student-adventure/:id" exact/>
      <Route component={AdventurePhase} path="/student-adventure-phase/:id" exact/>
      <Route component={AdventureTask} path="/student-adventure-task/:idPhase/:idTask" exact/>
    </div>
  )
}

export default Routes