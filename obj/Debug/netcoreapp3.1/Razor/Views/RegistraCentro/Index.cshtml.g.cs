#pragma checksum "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\RegistraCentro\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "36c752489d419b9b5c975ebda30e0820a198f87a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_RegistraCentro_Index), @"mvc.1.0.view", @"/Views/RegistraCentro/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\_ViewImports.cshtml"
using Proyecto3_Lenguajes;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\_ViewImports.cshtml"
using Proyecto3_Lenguajes.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"36c752489d419b9b5c975ebda30e0820a198f87a", @"/Views/RegistraCentro/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"43fdbbe72e9a899206096254f080663e40d6e6b2", @"/Views/_ViewImports.cshtml")]
    public class Views_RegistraCentro_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\RegistraCentro\Index.cshtml"
  
    ViewData["Title"] = "Registro";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
    <div class=""row jumbotron"" style=""background-image: url('img/gym.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center;"">
        <div class=""col-md-6 text-white text-center"" style=""margin-top: 2em;"">
            <h1>E-Wellness</h1>
            <legend>Para iniciar, ingrese la informaci&oacute;n de su negocio</legend>
        </div>
        <div class=""col-md-6"">
            <div class=""row"">
                <div id=""CTA"" class=""col-md-10 text-center rounded"" style="" background-color: #ffffff; margin-top: 2em; margin-bottom: 4em;"">
                    <input id=""bussinesName"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Nombre del Centro de Entrenamiento"">
                    <input id=""bussinesEmail"" type=""email"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Correo Electrónico"">
                    <input id=""bussinesPass"" type=""password"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Contraseña"">
         ");
            WriteLiteral(@"           <textarea class=""form-control"" id=""bussinesDesc"" placeholder=""Describa su negocio"" style=""margin-top: 1em;""></textarea>
                    <div class=""row"">
                        <div class=""col"">
                            <input id=""bussinesProv"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Provincia"">
                        </div>
                        <div class=""col"">
                            <input id=""bussinesCant"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Cantón"">
                        </div>
                        <div class=""col"">
                            <input id=""bussinesDist"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Distrito"">
                        </div>
                    </div>
                    <input id=""bussinesAddress"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Dirección"">
                    <input id=""bussinesPhone"" type=""text"" cla");
            WriteLiteral(@"ss=""form-control"" style=""margin-top: 1em;"" placeholder=""Teléfono"">
                    <div class=""row"">
                        <div class=""col"">
                            <input id=""bussinesMaxCapacity"" type=""number"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Capacidad Máxima"">
                        </div>
                        <div class=""col"">
                            <input id=""bussinesPercentCapacity"" type=""number"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Porcentaje permitido"">
                        </div>
                    </div>
                    <div class=""custom-file"" style=""margin-top: 1em;"">
                        <input type=""file"" class=""custom-file-input"" id=""fileChooserLogo"">
                        <label class=""custom-file-label"" for=""fileChooserLogo"">Seleccione su logo</label>
                    </div>
                    <div class=""custom-file"" style=""margin-top: 1em;"">
                        <input type=""file"" class=""cust");
            WriteLiteral(@"om-file-input"" id=""fileChooserImages"" multiple>
                        <label class=""custom-file-label"" for=""fileChooserImages"">Imágenes del Centro de Entrenamiento</label>
                    </div>

                    <a class=""btn btn-outline-primary"" onclick=""btnVerRegistraCentro()"" style=""margin-top: 1em; margin-bottom: 2em""> Registrar </a>
                </div>
                <div class=""col-md-2""></div>
            </div>
        </div>
    </div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
