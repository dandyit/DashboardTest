import React from 'react';
import { AreaChart, PieChart, ColumnChart, BarChart,LineChart  } from 'react-chartkick';
import 'chart.js';

const graphs = ()=>{
    
    const data = [
        ["Sun", 32], ["Mon", 46], ["Tue", 28],['Wed', 40],['Thu',50],['Fri',70],['Sat',100]
     ];
    const data2 = [
        ["2015", 40], ["Mon", 50], ["2016", 60],['2017', 50],['2018',80],['2019',90],['2020',100]
     ];
    const dataPi = [
        ["Sun", 32], ["Mon", 46], ["Tue", 28],['Wed', 40],['Thu',50],['Fri',70],['Sat',100]
     ];
    const dataCol = [
        ["Sun", 32], ["Mon", 46], ["Tue", 28],['Wed', 40],['Thu',50],['Fri',70],['Sat',100]
     ];
    const dataBar = [
        ["United States", 44], ["Germany", 23], ["Brazil", 22],["India", 44]
     ];
    const dataLine = [
        ["May", 44], ["Jun", 23], ["July", 22],["Aug", 44]
     ];
    return(
        <div className='graphs box'>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'>Per Day Ticket Sells</h6>
                <AreaChart data={data} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'>Ticket Data </h6>
                <PieChart data={dataPi} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'>Revenu Price Data </h6>
                <ColumnChart data={dataCol} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'>Represent Bar Graph</h6>
                <BarChart  data={dataBar} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'>Line Chart</h6>
                <LineChart data={dataLine} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark u-margin-bottom-medium'> Area Graph</h6>
                <AreaChart data={data2} />
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.
                    
                </p>
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.

                </p>
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.

                </p>
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.

                </p>
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.

                </p>
            </div>
            <div className='graph'>
                <h6 className='heading-6 heading-6--dark'>Represent Graph</h6>
                <p className='graph__para para--dark para--size-14'>
                    Quisque sit amet placerat nisl, vitae porta ex. Nunc rutrum nibh ac nisl porta, ac varius mi tempus. Maecenas a nulla mi. Donec aliquam ut ligula nec dignissim.

                </p>
            </div>
        </div>
    )
}

export default graphs;