export function button_coutnry_metric(input_country: string): void {
    if (typeof window.ym === 'function') {
        window.ym(215233,'reachGoal','november_BF_select_tour', {
            name_country:{
                input_country
            }
        });
    }
}