import React, { useContext } from 'react'
import TicketItem from '../components/TicketItem'
import { Context } from '../context/Context'

const TicketTable = () => {
    const {searchRes} = useContext(Context)

    return (
        <table className='w-full'>
            <thead>
                <tr className='font-bold text-[#9FA2B4] text-[14px]'>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pl-[32px]'>Ticket details</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Customer name</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Date</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pr-[32px]'>Priority</th>
                </tr>
            </thead>
            <tbody>
                {searchRes.map(item => <TicketItem key={item.id} item={item}/>)}
            </tbody>
        </table>
    )
}

export default TicketTable