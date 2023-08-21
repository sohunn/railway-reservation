import { error, fail } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import trains from '$lib/server/models/Trains';

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json()
    const { name, capacity, from, to, duration, price } = data

    if (
        !name ||
        !capacity ||
        !from ||
        !to ||
        !duration ||
        !price
    ) throw error(400, 'All fields are required to add a train')

    await trains.create({
        name,
        seatingCapacity: capacity,
        fromDestination: from,
        toDestination: to,
        duration,
        price
    })

    return new Response(JSON.stringify({ success: true }), { status: 201 })
};