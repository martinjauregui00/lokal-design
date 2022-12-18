import { Painting, PaintingDocument } from './painting.schema';
import { Model } from 'mongoose';
export declare class PaintingService {
    private paintingModel;
    constructor(paintingModel: Model<PaintingDocument>);
    getPaintings(): Promise<Painting[]>;
    getArtist(): Promise<Painting[]>;
    getInstallation(): Promise<Painting[]>;
    getPainting(id: string): Promise<Painting[]>;
    create(body: any): Promise<Painting[]>;
    update(id: number, body: any): Promise<Painting[]>;
    delete(id: number): Promise<Painting[]>;
}
