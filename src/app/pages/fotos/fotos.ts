import { AstTransformer } from '@angular/compiler/src/output/output_ast';

export interface Foto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string
}