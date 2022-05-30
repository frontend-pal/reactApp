/**
 * Este archivo fue creado usando el servicio gratuito
 * para transformar json a modelo de typescript
 * http://json2ts.com/
 */
export interface Snapshot {
    url: string;
    width: number;
    height: number;
    status: string;
}

export interface ProductDescription {
    text: string;
    plain_text: string;
    last_updated: Date;
    date_created: Date;
    snapshot: Snapshot;
}
