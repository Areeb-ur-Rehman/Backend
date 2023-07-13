const express = require ('express');
const Router = express.Router();

// Accuring MiddleWares
const {AuthorizeAdmin} = require ('../middleware/adminAuthorization')
// Accuring MiddleWares

// Accuring Controllers
const { AdminRegister , AdminLogin} = require ('../controllers/adminManagementController')
// Accuring Controlers


// Define Routers
Router.post('/AdminRegister',AdminRegister)
Router.post('/AdminLogin',AdminLogin)
// Define Routers

// Export
module.exports=Router
