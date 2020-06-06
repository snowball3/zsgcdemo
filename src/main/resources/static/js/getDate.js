$(function() {

    $.post({
        url: 'user/getAll',
        success: function (data) {
            for(var i = 0; i < data.length; i++) {

                var text = "<tr>\n" +
                    "                    <td>"+data[i].id+"</td>\n" +
                    "                    <td>"+data[i].username+"</td>\n" +
                    "                    <td>"+data[i].password+"</td>\n" +
                    "                    <td>\n" +
                    "                        <a href=\"user/delById?id="+data[i].id+"\" class=\"btn btn-danger\">删除</a>\n" +
                    "                        <a href=\"update.html?id="+data[i].id+"\" class=\"btn btn-warning\">修改</a>\n" +
                    "                        <a href=\"save.html\" class=\"btn btn-success\">添加</a>\n" +
                    "                    </td>\n" +
                    "                </tr>"

                var obj = $(".pool");
                obj.append(text);
            }


        }
    });
});