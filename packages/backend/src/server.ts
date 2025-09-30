import express from 'express';
import basicRoute from './routes/basic.route';
const app = express();
const port = 8080;

app.use(express.json());

app.use('/', basicRoute);

app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`);
    
});

export const viteNodeApp = app;
