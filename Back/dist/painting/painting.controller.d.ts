import { Painting } from './painting.schema';
import { PaintingService } from './painting.service';
export declare class PaintingController {
    private readonly paintingService;
    constructor(paintingService: PaintingService);
    getPaintings(): Promise<Painting[]>;
    getArtist(): Promise<Painting[]>;
    getInstallation(): Promise<Painting[]>;
    getPainting(res: any, id: string): Promise<Painting>;
    create(res: any, body: any): Promise<void>;
    update(res: any, id: number, body: any): Promise<void>;
    delete(res: any, id: number): Promise<void>;
}
