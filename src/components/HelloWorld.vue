<template>
  <div class="row">
    <div class="col-md-12">
      <form action="" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="_token" value="VktqGJ2SQjqicyQKJu7CZP6dpT4xu7OWv5bxXuS9" />
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">ফলাফল</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="student_id">শিক্ষারথী আই ডি</label>
                  <input id="student_id" name="student_id" class="form-control" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="year">সাল</label>
                  <select id="year" name="year" class="form-control">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="class_id">ক্লাস</label>
                  <select id="class_id" name="class_id" class="form-control">
                    <option value="0">সিলেক্ট ক্লাস</option>
                    <option value="1">Play</option>
                    <option value="2">1</option>
                    <option value="3">KG</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="exam_id">এক্সাম</label>
                  <select id="exam_id" name="exam_id" class="form-control">
                    <option value="0">সিলেক্ট এক্সাম</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" name="show_result" class="btn btn-outline-success btn-lg float-right">দেখুন</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <button  @click="PrintElem('myDivToPrint')" title="Print" class="btn btn-success"> Print </button>
          <div id="myDivToPrint" class="row">
            <div class="col-md-12 print">
              <table class="border" style="width: 100%">
                <tbody>
                  <tr>
                    <td colspan="3" style="text-align: center"></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        height="120"
                        width="100"
                        src="https://edumaster.dynamicsoft.tech/frontend/images/students/1650783719.png"
                      />
                    </td>
                    <td style="text-align: center">
                      <h1 style="font-weight: bold; color: tomato">
                        <img src="https://edumaster.dynamicsoft.tech/frontend/images/logo/16507841072.png" /> Ekra Pre Craded
                        &amp; High school
                      </h1>
                      <h3>Address: Pariatur Aut fugiat</h3>
                      <h3>Phone: 01794335387&nbsp;&nbsp; Email: info@daynamicsoft.com</h3>
                      <u>
                        <h3 class="text-primary" style="font-weight: bold">PROGRESS REPORT</h3>
                      </u>
                    </td>
                    <td>
                      <table class="border-all" style="float: right; border: 1px solid black; border-collapse: collapse">
                        <tbody>
                          <tr>
                            <td>Number</td>
                            <td>Grade</td>
                            <td>GP</td>
                          </tr>
                          <tr>
                            <td>80.00-100.00</td>
                            <td>A+</td>
                            <td>5.00</td>
                          </tr>
                          <tr>
                            <td>70.00-79.00</td>
                            <td>A</td>
                            <td>4.00</td>
                          </tr>
                          <tr>
                            <td>60.00-69.00</td>
                            <td>A-</td>
                            <td>3.50</td>
                          </tr>
                          <tr>
                            <td>50.00-59.00</td>
                            <td>B</td>
                            <td>3.00</td>
                          </tr>
                          <tr>
                            <td>40.00-49.00</td>
                            <td>C</td>
                            <td>2.00</td>
                          </tr>
                          <tr>
                            <td>33.00-39.00</td>
                            <td>D</td>
                            <td>1.00</td>
                          </tr>
                          <tr>
                            <td>0.00-32.00</td>
                            <td>F</td>
                            <td>0.00</td>
                          </tr>
                          <tr>
                            <td>80.00-100.00</td>
                            <td>A+</td>
                            <td>5.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr class="border">
                    <td>
                      <table style="width: 100%; display: block">
                        <tbody>
                          <tr>
                            <td width="50%">Name of Student</td>
                            <td width="50%">: Serena Shannon</td>
                          </tr>
                          <tr>
                            <td width="50%">Father's Name</td>
                            <td width="50%">: Malcolm Marquez</td>
                          </tr>
                          <tr>
                            <td width="50%">Mother's Name</td>
                            <td width="50%">: Patience Hancock</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table style="width: 100%; display: block">
                        <tbody>
                          <tr>
                            <td width="50%">Student ID</td>
                            <td width="50%">: 1001</td>
                          </tr>
                          <tr>
                            <td width="50%">Roll No.</td>
                            <td width="50%">: 567</td>
                          </tr>
                          <tr>
                            <td width="50%">Class</td>
                            <td width="50%">: Play</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table style="width: 100%; display: block">
                        <tbody>
                          <tr>
                            <td width="50%">Exam</td>
                            <td width="50%">: First</td>
                          </tr>
                          <tr>
                            <td width="50%">Year/Session</td>
                            <td width="50%">: 2022</td>
                          </tr>
                          <tr>
                            <td width="50%">Group</td>
                            <td width="50%">: General</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <table width="100%" class="border-all" style="border: 1px solid black; border-collapse: collapse">
                        <tbody>
                          <tr>
                            <td rowspan="2">Subject</td>
                            <td rowspan="2">Full Marks</td>
                            <td rowspan="2">Total Marks</td>
                            <td rowspan="2">Letter Grade</td>
                            <td rowspan="2">Grade point</td>
                          </tr>
                          <tr></tr>
                          <tr>
                            <td>Bangla</td>
                            <td>200.00</td>
                            <td>80.00</td>
                            <td>A+</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>100.00</td>
                            <td>134.00</td>
                            <td></td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Total Exam Marks</td>
                            <td>300</td>
                            <td>214</td>
                            <td>C</td>
                            <td>2.5</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    PrintElem(elem) {
      const mywindow = window.open('', 'PRINT', 'height=1000,width=1000')

      mywindow.document.write('<html><head><title>' + document.title + '</title>')
      mywindow.document.write('</head><body >')
      mywindow.document.write('<h1>' + document.title + '</h1>')
      mywindow.document.write(document.getElementById(elem).innerHTML)
      mywindow.document.write('</body></html>')

      mywindow.document.close() 
      mywindow.focus() 

      mywindow.print()
      
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
