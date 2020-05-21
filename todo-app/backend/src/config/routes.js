const express = require('express')

module.exports = (server) => {
  // API Routes
  const Router = new express.Router()
  server.use('/api', Router)

  // TODO Routes
  const todoService = require('../api/todo/todoService');
  todoService.register(Router, '/todos') // Registra os métodos definidos em todoService.
}