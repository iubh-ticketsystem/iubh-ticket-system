export interface Ticket {
    ticketId?: string;
    uid?: string;
    kategorie?: string; /* 'Prüfungsamt' | 'Administration' | 'IT-Support' | 'Sonstiges' | null; */
    betreff?: string;
    text?: string;
    status?: 'offen' | 'in Bearbeitung' | 'beantwortet' | null;
    /*   closed?: boolean; */
    datum?: any;
    antwortdatum?: any;
    antwort?: string; 
}