// Block Start Dependencies
const express = require('express');
const cors = require('cors');
// const path = require('path')
const LoadEnvironmentVariables = require('./Configuration/LoadMyEnvironmentVariable');
const LoadDataBase = require('./Configuration/DataBaseConfiguration');
// Block End Dependencies


// Block Start Initialize the app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((express.text));
app.use((express.raw));
app.use((cors));
const PORT = process.env.PORT || 9696;
// Block End Initalize the app


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Header for your Application

//Start Block Accessing The Routes in the Entry Point
const _adminManagememntRouter = require ('./routes/AdminManagementRoute');
// const _platFormManagementRouter = require ('./routes/platformManagementRoute');
// const _CampaignManagementRouter = require ('./routes/campaignManagementRoute');
// const _transactionStatusManagementRouter = require ('./routes/transactionStatusManagementRoute');
// const _conversionSaleManagementRouter = require ('./routes/conversionSalesManagementRoute');
// const _retentionSaleManagementRouter = require ('./routes/retentionSalesManagementRouter');
// const _crmStatusManagementRouter = require ('./routes/crmStatusManagementRoute');
// const _transferStatusManagementRouter = require ('./routes/transferStatusManagementRoute');

//*****UsingRoutes*****//
// app.use(express.static(path.join(__dirname,'/front-end')));
// app.use('/assets',express.static('assets'));
app.use('/_AdminManagementRouter',_adminManagememntRouter)
// app.use('/_ platformManagementRouter',_platFormManagementRouter)
// app.use('/_campaignManagementRouter',_campaignManagementRouter)
// app.use('/_transactionStatusManagementRouter',_transactionStatusManagementRouter)
// app.use('/_conversionSaleManagementRouter',_conversionSaleManagementRouter)
// app.use('/_retentionSaleManagementRouter',_retentionSaleManagementRouter)
// app.use('/_crmStatusManagementRouter',_crmStatusManagementRouter)
// app.use('/_transferStatusManagementRouter',_transferStatusManagementRouter)

//*****UsingRoutes*****//

//End Block Accessing The Routes in the Entry Point


























//Start Block For Listening Your App On Defined Port
app.listen( PORT, () => {
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);

})

//End Block For Listening Your App On Defined Port
// 'mongodb+srv://Areeb123:Areeb123@dummy-database.wyjvywz.mongodb.net/'