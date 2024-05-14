export interface School {
    id?: string;
    school_name: string;
    address?: string | null;
    city?: string | null; 
    postal_code?: number | null;
    country?: string | null; 
    email: string;
    telephone: string;
    social_networks?: string | null;
    description?: string | null;
    commission?: number | null;
    average_training_price?: number | null;
    average_profit?: number | null;
    average_points?: number | null;
    average_order?: number | null;
};