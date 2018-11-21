        // 获取当前文件全路径
        // alert(window.location.href);
        // alert(window.location);
        // alert(location.href);
        // alert(parent.location.href);
        // alert(top.location.href);
        // alert(document.location.href);
        // alert(document.URL);
        var fileFullPath = document.URL;
        // 获取当前文件路径
        var filePath = location.href.substring(0, location.href.lastIndexOf('/'));
        // 获取当前文件名
        var filename = location.href;
        filename = filename.substr(filename.lastIndexOf('/') + 1);
        // 填表
        var testcase = [
            {
                testcaseId:1,
                testcaseFileName: filename,
                testcaseFilePath: filePath,
                interfaceFront: 'mailsearch',
                interfacePhp: '/mailSettingRead/userMailList',
                testcaseRsult: 'pass',
                testcaseRemark: 'nothing',
            },
            {
                testcaseFileName: 'mailfoders.js',
                testcaseFilePath: ' C:\\Users\\DELL\\Documents\\codeyv\\nodejswithhtml\\mailfoders.js',
                interfaceFront: 'mailfoders',
                interfacePhp: '/mailSettingRead/userMailList',
                testcaseRsult: 'fail',
                testcaseRemark: 'qingqiuwei',
            },
            {
                testcaseFileName: 'taglist.js',
                testcaseFilePath: ' C:\\Users\\DELL\\Documents\\codeyv\\nodejswithhtml\\taglist.html',
                interfaceFront: 'taglist',
                interfacePhp: '/mailSettingRead/taglist',
                testcaseRsult: 'pass',
                testcaseRemark: 'tag test awsome',
            }
        ];
        document.getElementById('testcaseId001').innerHTML = testcase[0].testcaseId;
        document.getElementById('testcaseFileName001').innerHTML = testcase[0].testcaseFileName;
        document.getElementById('testcaseFilePath001').innerHTML = testcase[0].testcaseFilePath;
        document.getElementById('interfaceFront001').innerHTML = testcase[0].interfaceFront;
        document.getElementById('interfacePhp001').innerHTML = testcase[0].interfacePhp;
        document.getElementById('testcaseRsult001').innerHTML = testcase[0].testcaseRsult;
        document.getElementById('testcaseRemark001').innerHTML = testcase[0].testcaseRemark;
        // testcaseFileName001 =//测试文件名
        // testcaseFilePath001 =//测试文件路径
        // interfaceFront001 =//前端接口名
        // interfacePhp001 =//Php接口名
        // testcaseRsult001 =//测试结果
        // testcaseRemark001 =//备注

        var oHtml = document.getElementsByClassName('tableA')[0].outerHTML;

        var excelHtml = `
        < html >
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
                <style media="screen">
                .tableA {
                    border-collapse: collapse;
                }
        
                .tableA .title th {
                    height: 50px;
                    font-size: 24px;
                    font-family: '微软雅黑';
                    font-weight: 700;
                    text-align: left;
                }
        
                .tableA tr th {
                    padding: 0 20px;
                    border: 1px #000 solid;
                    height: 40px;
                    background: #efefef;
                    text-align: left;
                }
        
                .tableA tr td {
                    padding: 0 20px;
                    font-size: 14px;
                    border: 1px #000 solid;
                    height: 40px;
                    text-align: left;
                }
        
                .tableA .footer td {
                    font-size: 14px;
                    font-weight: 700;
                    text-align: left;
                }
    </style>
      </head >
            <body>
                ${oHtml}
            </body>
    </html >
            `;
        var excelBlob = new Blob([excelHtml], { type: 'application/vnd.ms-excel' });
        // 创建一个a标签
        var oA = document.createElement('a');
        // 利用URL.createObjectURL()方法为a元素生成blob URL
        oA.href = URL.createObjectURL(excelBlob);
        // 给文件命名
        oA.download = '小满桌面端PB接口自动化测试报告.xls';
        // 模拟点击
        oA.click();

