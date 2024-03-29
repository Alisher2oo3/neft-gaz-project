import ReactEcharts from 'echarts-for-react';
import 'echarts-gl';
import * as echarts from 'echarts';

const Charts = ({option}) => {
    return <ReactEcharts option={option} style={{width: '100%'}}/>;
}
export default Charts
