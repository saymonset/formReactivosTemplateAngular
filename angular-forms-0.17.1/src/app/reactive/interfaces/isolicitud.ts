
export interface ISolicitud {
    /**Se usan para cuando procede a ejecutar la accion firmar*/
    isProcesoFirma?:boolean;
    isIncognitaFirma?:boolean;
    isPositiveFirma?:boolean;
    isRechazoFirma?:boolean;
    /**** */
    anexos?:             Anexo[];
    accion?:             string;
    isRevisar?:           boolean;
    isFirmar?:            boolean;
    asunto?:             string;
    categoria?:          Categoria;
    check?:              boolean,  
    comentario?:         null;
    csv?:                boolean;
    documentos?:         Anexo[];
    descripcion?:        string;
    estado?:             Estado;
    esFirmaVisible?:      Boolean;
    fechaActualizacion?: null;
    fechaFin?:           null;
    fechaInicial?:       Date;
    flujoFirma?:         FlujoFirma | null;
    highlightFields?:    HighlightFields;
    historico?:          Historico[];
    id?:                 number;
    idSolicitante?:      number;
    links?:              Link[];
    notificaciones?:     any[];
    pasosActivos?:       Paso[];
    pasosTerminados?:    Paso[];
    perfilFirma?:        null | string;
    peticionario?:       Peticionario;
    urgente?:            boolean | null;
    version?:            null | string;
}

 
 
export interface Historico {
    accion:      HistoricoAccion;
    descripcion: string;
    fecha:       Date;
    id:          number;
    links:       any[];
    motivo:      Motivo;
    usuario:     Usuario;
}

export enum HistoricoAccion {
    Iniciar = "Iniciar",
}

export enum Motivo {
    Motivo = "Motivo",
}



export interface Anexo {
    gestorDocumental:         string;
    id:                       number;
    identificadorEnGestorDoc: string;
    links:                    any[];
    nombre:                   string;
}

export interface Categoria {
    codigo?:      string;
    descripcion?: string;
    id?:          number;
    links?:       any[];
}

export interface FlujoFirma {
    descripcion: null;
    id:          number;
    links:       any[];
    nombre:      string;
    temporal:    boolean;
}

export interface Link {
    href: string;
    rel:  string;
}

export interface PasosActivo {
    accion:          string;
    id:              number;
    links:           any[];
    nombre:          string;
    numeroAcciones:  number;
    opcional:        boolean;
    pasosGrupo:      any[];
    pasosSiguientes: any[];
    usuario:         string;
}



export enum Estado {
    Borrador = "Borrador",
    Pendiente = "Pendiente",
    concluidas = "Concluidas",
    }




export interface HighlightFields {
    asunto: string[];
}



export interface Paso {
    accion:          Accion;
    id:              number;
    links:           any[];
    nombre:          null;
    numeroAcciones:  number;
    opcional:        boolean;
    pasosGrupo:      any[];
    pasosSiguientes: Paso[];
    usuario:         Usuario;
}



export enum Accion {
    Configurar = "Configurar",
    Firmar = "Firmar",
    Revisar = "Revisar",
}

export enum Usuario {
    Usuario = "Usuario",
}


export enum Peticionario {
    UserSedeAdmin = "user_sede_admin",
}
  