// El tipado de la respuesta para la consulta de berries en la api se realizó con https://quicktype.io.

export interface Berries {
    firmness:           Firmness;
    flavors:            Flavor[];
    growth_time:        number;
    id:                 number;
    item:               Firmness;
    max_harvest:        number;
    name:               string;
    natural_gift_power: number;
    natural_gift_type:  Firmness;
    size:               number;
    smoothness:         number;
    soil_dryness:       number;
}

export interface Firmness {
    name: string;
    url:  string;
}

export interface Flavor {
    flavor:  Firmness;
    potency: number;
}
