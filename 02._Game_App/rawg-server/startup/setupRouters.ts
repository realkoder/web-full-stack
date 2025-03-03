import express from "express";
import storeRouter from "../routers/StoreRouter";
import parentPlatformRouter from "../routers/ParentPlatformRouter";
import genreRouter from "../routers/GenreRouter";
import gameRouter from "../routers/GameRouter";

const setupRouters = (app: express.Application) => {
    app.use("/genres", genreRouter);
    app.use("/stores", storeRouter);
    app.use("/platforms/lists/parents", parentPlatformRouter);
    app.use("/games", gameRouter);
};

export default setupRouters;