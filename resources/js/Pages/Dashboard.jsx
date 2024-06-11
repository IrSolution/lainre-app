import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const {
        user
    } = props

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            flash={props.flash}
            page={'Dashboard'}
            action={''}
        >
            <Head title="Dashboard" />

            <div>
                <div className="mx-auto sm:px-6 lg:px-8 ">
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                        <div className="overflow-hidden shadow-sm sm:rounded-lg bg-white">
                            <div className="p-6 ">
                                <div className='text-lg'>Label A</div>
                                <div className='font-bold text-2xl'></div>
                            </div>
                        </div>
                        <div className="overflow-hidden shadow-sm sm:rounded-lg bg-white">
                            <div className="p-6 ">
                                <div className='text-lg'>Label B</div>
                                <div className='font-bold text-2xl'></div>
                            </div>
                        </div>
                        <div className="overflow-hidden shadow-sm sm:rounded-lg bg-white">
                            <div className="p-6 ">
                                <div className='text-lg'>Label C</div>
                                <div className='font-bold text-2xl'></div>
                            </div>
                        </div>
                        <div className="overflow-hidden shadow-sm sm:rounded-lg bg-white">
                            <div className="p-6 ">
                                <div className='text-lg'>User</div>
                                <div className='font-bold text-2xl'>{user}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
