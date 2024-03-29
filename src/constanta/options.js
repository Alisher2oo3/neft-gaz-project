// Qatlamda bosim o'zgarish grafikasi
import * as echarts from "echarts";

export const option_1 = {
    title: {
        text: 'Qatlamda bosim o\'zgarish grafikasi'
    },
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            projection: 'orthographic'
        }
    },
    series: [
        {
            type: 'surface',
            wireframe: {
                show: false
            },
            equation: {
                x: {
                    step: 0.05
                },
                y: {
                    step: 0.05
                },
                z: function (x, y) {
                    if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                        return '-';
                    }
                    return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
                }
            }
        }
    ]
};

// Kesimda bosim o'zgarishi
export const option_2 = {
    title: {
        text: 'Kesimda bosim o\'zgarishi'
    },
    xAxis: {
        type: 'category',
        data: [0.2, 0.4, 0.6, 0.8, 1]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [1, 0.8, 0.1, 0.8, 1],
            type: 'line',
            smooth: true
        }
    ]
};

// Qatlamda bosim o'zgarishi kontur grafikasi
export const option_3 = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
        text: 'Qatlamda bosim o\'zgarishi kontur grafikasi'
    },
    legend: {},
    radar: [
        {
            indicator: [
                {text: 'Indicator1'},
                {text: 'Indicator2'},
                {text: 'Indicator3'},
                {text: 'Indicator4'},
                {text: 'Indicator5'}
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
                formatter: '【{value}】',
                color: '#428BD4'
            },
            splitArea: {
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            }
        },
        {
            indicator: [
                {text: 'Indicator1', max: 150},
                {text: 'Indicator2', max: 150},
                {text: 'Indicator3', max: 150},
                {text: 'Indicator4', max: 120},
                {text: 'Indicator5', max: 108},
                {text: 'Indicator6', max: 72}
            ],
            center: ['75%', '50%'],
            radius: 120,
            axisName: {
                color: '#fff',
                backgroundColor: '#666',
                borderRadius: 3,
                padding: [3, 5]
            }
        }
    ],
    series: [
        {
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [100, 8, 0.4, -80, 2000],
                    name: 'Data A'
                },
                {
                    value: [60, 5, 0.3, -100, 1500],
                    name: 'Data B',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [120, 118, 130, 100, 99, 70],
                    name: 'Data C',
                    symbol: 'rect',
                    symbolSize: 12,
                    lineStyle: {
                        type: 'dashed'
                    },
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value;
                        }
                    }
                },
                {
                    value: [100, 93, 50, 90, 70, 60],
                    name: 'Data D',
                    areaStyle: {
                        color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                            {
                                color: 'rgba(255, 145, 124, 0.1)',
                                offset: 0
                            },
                            {
                                color: 'rgba(255, 145, 124, 0.9)',
                                offset: 1
                            }
                        ])
                    }
                }
            ]
        }
    ]
};

// Neftning to'yinishi
export const option_4 = {
    title: {
        text: 'Neftning to\'yinishi'
    },
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value',
        max: 1,
        splitNumber: 2
    },
    grid3D: {
        viewControl: {
            // projection: 'orthographic'
        },
        boxHeight: 40
    },
    series: [
        {
            type: 'surface',
            wireframe: {
                show: false
            },
            shading: 'color',
            equation: {
                x: {
                    step: 0.05,
                    min: -3,
                    max: 3
                },
                y: {
                    step: 0.05,
                    min: -3,
                    max: 3
                },
                z: function (x, y) {
                    return (Math.sin(x * x + y * y) * x) / 3.14;
                }
            }
        }
    ]
};

// Markaziy quduqda bosim tushushi
export const option_5 = {
    title: {
        text: 'Markaziy quduqda bosim tushushi'
    },
    xAxis: {
        type: 'category',
        data: [100, 200, 300, 400]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [1, 0.2, 0.15, 0.125, 0.1],
            type: 'line',
            smooth: true
        }
    ]
};

// Kesimda neftning to'yinishi
export const option_6 = {
    title: {
        text: 'Kesimda neftning to\'yinishi'
    },
    xAxis: {
        type: 'category',
        data: [0.2, 0.4, 0.6, 0.8, 1]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [0.05, 0.2, 0.9, 0.2, 0.05],
            type: 'line',
            smooth: true
        }
    ]
};