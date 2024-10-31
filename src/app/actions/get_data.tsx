'use server'

import fs from 'fs';

export async function get_data(f: string){
        return fs.readFileSync(f, "utf-8").toString();
}