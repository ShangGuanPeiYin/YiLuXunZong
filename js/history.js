var myChartLeft1 = echarts.init(document.getElementById('left1'));   
var optionLeft1 = {
  title: {
      text: '中国古代中医发展大事件分朝代统计（件）',
      subtext: '数据来源：中国医药网',
      left: 'center',
      textStyle: {
        fontSize: 18,
      },
      subtextStyle: {
        padding: [5, 0]    // 增加上下间距
      }
    },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: '#FFF4E6',  // 浅橙底色
    borderColor: '#FFA940',       // 橙色边框
    textStyle: { color: '#613400' } // 深棕文字
  },
  grid: {
    left: '8%',    // 增加左侧空间
    right: '6%',
    bottom: '12%', // 底部留更多空间
    containLabel: true,
    backgroundColor: '#FFFCF5'  // 浅黄背景
  },
  xAxis: [{
      type: 'category',
      data: ['远古 - 公元前21世纪', '公元前1700 - 1100年', '周 (公元前1100 - 221年)', '秦、汉 (公元前221 - 公元220年)', '三国、魏晋及南北朝 (公元220年 - 581年)', '隋、唐 (公元 618 - 907年)', '宋 (公元960 - 1279年)','金、元 (公元1115 - 1368年)','明 (公元1368 - 1644年)','清 (公元1644 - 1911年)','1912及以后'],
      axisLine: { lineStyle: { color: '#FFA940' } }, // 橙色轴线
      axisLabel: { 
        rotate: 45,
        margin: 20,  // 标签与轴线间距
        color: '#874c0f'  // 深棕标签
      }
  }],
  yAxis: [{
      type: 'value',
      axisLine: { show: true, lineStyle: { color: '#FFA940' } }, // 橙色轴线
      axisLabel: { color: '#874c0f' } // 深棕标签
  }],
  series: [{
      name: '大事件数量',
      type: 'bar',
      barWidth: '60%',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [{
              offset: 0, color: '#FFD700' // 亮黄色
          }, {
              offset: 1, color: '#FFA500' // 橙色
          }]
        }
      },
      data: [3,2,5,8,6,10,50,7,35,61,31]
  }]
};
  myChartLeft1.setOption(optionLeft1);   
  
var myChartLeft2 = echarts.init(document.getElementById('left2'));  
var optionLeft2 = {
  title: {
    text: '中国古代中医发展大事件类别统计（件）',
    subtext: '数据来源：中国医药网',
    left: 'center',
    textStyle: {
      fontSize: 18,
    }
  },
  tooltip: {  // 新增tooltip配置
    trigger: 'item',
    formatter: '{b}<br/>事件数量: {c}件',  // 自定义显示格式
    backgroundColor: '#FFFCF5',  // 浅黄底色
    borderColor: '#FFA940',  // 橙色边框
    textStyle: {
      color: '#613400'  // 深棕色文字
    }
  },
  legend: {
    top: 'bottom',
    textStyle: {
      color: '#874c0f'
    }
  },
  toolbox: {
    show: true,
    iconStyle: {
      color: '#FFA940'
    },
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [{
    name: 'Nightingale Chart',
    type: 'pie',
    radius: [50, 250],
    center: ['50%', '50%'],
    roseType: 'area',
      color: [  // 定义橙黄色系颜色组
          {type: 'linear', x: 0, y: 0, x2: 1, y2: 0, 
           colorStops: [{offset: 0, color: '#FFD700'}, {offset: 1, color: '#FFA500'}]},  // 黄-橙渐变
          {type: 'linear', x: 0, y: 0, x2: 1, y2: 0, 
           colorStops: [{offset: 0, color: '#FFA500'}, {offset: 1, color: '#FF8C00'}]},  // 橙-深橙渐变
          {type: 'linear', x: 0, y: 0, x2: 1, y2: 0, 
           colorStops: [{offset: 0, color: '#FFF3B0'}, {offset: 1, color: '#FFD700'}]},  // 浅黄-金渐变
          {type: 'linear', x: 0, y: 0, x2: 1, y2: 0, 
           colorStops: [{offset: 0, color: '#FFE4B5'}, {offset: 1, color: '#DAA520'}]}  // 米白-棕黄渐变
      ],
      itemStyle: {
        borderRadius: 8,
        borderColor: '#FFFCF5',
        borderWidth: 2,
        emphasis: {  // 修改高亮样式
          borderColor: '#FFA940',  // 橙色边框
          borderWidth: 3,
          shadowColor: 'rgba(255,169,64,0.3)',  // 橙色阴影
          shadowBlur: 10
        }
      },
      label: {
        color: '#613400'
      },
      data: [
          { 
              value: 63, 
              name: '理论发展（阴阳五行学说、六气致病说等）',
              itemStyle: {
                  color: 0  // 使用color数组第一个渐变
              }
          },
          {
              value: 132,
              name: '中医著作(《黄帝内经》《伤寒杂病论》等）',
              itemStyle: {
                  color: 1  // 使用color数组第二个渐变
              }
          },
          {
              value: 28,
              name: '政策变革（唐设太医署、宋设校正医书局等）',
              itemStyle: {
                  color: 2  // 使用color数组第三个渐变
              }
          },
          {
              value: 47,
              name: '技术发明（人痘接种法、针灸铜人等）',
              itemStyle: {
                  color: 3  // 使用color数组第四个渐变
              }
          }
      ]
  }]
};
  myChartLeft2.setOption(optionLeft2);  


var myChartCenter = echarts.init(document.getElementById('map'));
optionCenter = {
  title: {
    text: '各朝代中医典籍数量占比统计',
    subtext: '数据来源：TCM Ancient Books 中医药古籍数据集',
    left: 'center',
    textStyle: {
      fontSize: 18,
    },
    subtextStyle: {
      fontSize: 12,
      color: '#8c8c8c'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} 部 ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: '22%',  // 图例同步下移
    textStyle: {
      color: '#613400'
    }
  },
  color: ['#ffd666', '#ffc069', '#ff9c6e', '#ff9a6e', '#ff7a45', '#fa541c', '#d4380d', '#ad2102', '#871400', '#610b00', '#3d0b00'],
  series: [{
    name: '典籍数量',
    type: 'pie',
    radius: ['40%', '65%'],
    center: ['50%', '58%'], 
    data: [
      { value: 258, name: '清' },
      { value: 102, name: '明' },
      { value: 75, name: '其他' },
      { value: 60, name: '宋/金' },
      { value: 30, name: '元' },
      { value: 17, name: '隋唐' },
      { value: 8, name: '汉' },
      { value: 5, name: '魏晋' },
      { value: 5, name: '南北朝' },
      { value: 4, name: '民国' },
      { value: 1, name: '五代' }
    ],
    itemStyle: {
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#fff'
    },
    label: {
      formatter: '{b|{b}}\n{d}%',
      rich: {
        b: {
          fontSize: 12,
          color: '#613400',
          padding: [0, 0, 2, 0]
        }
      }
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};
    if (optionCenter && typeof optionCenter === 'object') {
      myChartCenter.setOption(optionCenter);
    }

    window.addEventListener('resize', myChartCenter.resize);
    myChartCenter.setOption(optionCenter);  


  var myChartRight1 = echarts.init(document.getElementById('right1'));
  var app = {};
  
  var optionRight1;

  optionRight1 =  {
    title: {
        text: '中国中药材、中药饮片、中成药销售数据统计（亿元）',
        subtext: '数据来源：中医科学网',
        left: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold'
        },
        subtextStyle: {
          padding: [5, 0]    // 增加主副标题间距
        },
        top: '5%'  // 增加标题与图表间距
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#FFF4E6',  // 浅橙底色
      borderColor: '#FFA940',      // 橙色边框
      textStyle: { color: '#613400' } // 深棕文字
    },
    legend: {
      data: ['中药材', '中药饮片', '中成药'],
      textStyle: {
        color: '#874c0f'  // 图例深棕色
      },
      top: '15%'  // 下移图例位置
    },
    grid: {
      left: '8%',
      right: '6%',
      bottom: '12%',
      top: '25%',  // 增加图表顶部间距
      containLabel: true,
      backgroundColor: '#FFFCF5'  // 浅黄背景
    },
    toolbox: {
      feature: {
        saveAsImage: {
          iconStyle: { color: '#FFA940' }  // 橙色图标
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2015', '2016', '2017', '2018', '2019', '2020'],
      axisLine: { lineStyle: { color: '#FFA940' } },  // 橙色轴线
      axisLabel: { color: '#874c0f' }  // 深棕标签
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#FFA940' } },  // 橙色轴线
      axisLabel: { color: '#874c0f' },  // 深棕标签
      splitLine: { lineStyle: { color: '#FFE4B5' } } // 浅黄辅助线
    },
    series: [
      {
        name: '中药材',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#FFD700',  // 亮黄色
          borderColor: '#FFA500' // 橙色边框
        },
        lineStyle: { width: 3 },
        data: [960, 1250, 1320, 1550, 1715, 1900]
      },
      {
        name: '中药饮片',
        type: 'line',
        stack: 'Total',
        symbol: 'rect',
        symbolSize: 8,
        itemStyle: {
          color: '#FFA500',  // 橙色
          borderColor: '#FF8C00' // 深橙边框
        },
        lineStyle: { width: 3 },
        data: [1520, 1790, 1810, 2035, 2245, 2500]
      },
      {
        name: '中成药',
        type: 'line',
        stack: 'Total',
        symbol: 'triangle',
        symbolSize: 8,
        itemStyle: {
          color: '#DAA520',  // 棕黄色
          borderColor: '#B8860B' // 深棕边框
        },
        lineStyle: { width: 3 },
        data: [6010, 6500, 7200, 7600, 8100, 9125]
      }
    ]
};
  
    myChartRight1.setOption(optionRight1); 


  var myChartRight2 = echarts.init(document.getElementById('right2'));  
        var optionRight2 = {
            title: {
                text: '2024部分国家中医从业者数量统计（人）',
                subtext: '数据来源：中医科学网',
                left: 'center',
                textStyle: {
                  fontSize: 18
                }
              },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: [
                  '荷兰',
                  '巴西',
                  '英国',
                  '南非',
                  '法国',
                  '新加坡',
                  '西班牙',
                  '马来西亚',
                  '葡萄牙',
                  '泰国',
                  '德国',
                  '菲律宾',
                  '美国',
                  '澳大利亚',
                  '加拿大',
                  '新西兰',
                  '日本',
                  '印尼'
                ],
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  interval: 0, // 强制显示所有标签
                  // 可选：文字倾斜显示防止重叠
                  rotate: 45,
                  margin: 15
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [
                  4000, 50000, 10000, 500, 10000, 3000, 15000, 8000, 3000, 1000, 50000,
                  1000, 40000, 5000, 8000, 1500, 400000, 200000
                ],
                itemStyle: {
                  color: '#ff8c00', // 标准橙色
                  borderRadius: [4, 4, 0, 0] // 顶部圆角
                }
              }
            ]
          };
          
  myChartRight2.setOption(optionRight2);  
    myChartRight2.setOption(optionRight2);
