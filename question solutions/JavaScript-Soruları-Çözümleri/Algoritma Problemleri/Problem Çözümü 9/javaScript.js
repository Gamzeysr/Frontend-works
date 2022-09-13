// 10’lar çarpım tablosunu ekranda bir tablo içinde veren javascript kodları

document.write("<table border='3'><tr>");
        for (let x = 1; x <= 10; x++) {        
        document.write("<td>");
            for (let i = 1; i <= 10; i++) {
                document.write(x+"*" + i + "=" + x * i + "<br/>");
            }
            if(x==5)
            {
            document.write("</tr><tr>");
            }
            document.write("</td>");
        }    
        document.write("</tr><table>");
    