#pragma checksum "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\IniciarSesion\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3387c8a9d30315b3fd106aac63b18c5325e7937e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_IniciarSesion_Index), @"mvc.1.0.view", @"/Views/IniciarSesion/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3387c8a9d30315b3fd106aac63b18c5325e7937e", @"/Views/IniciarSesion/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"43fdbbe72e9a899206096254f080663e40d6e6b2", @"/Views/_ViewImports.cshtml")]
    public class Views_IniciarSesion_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\congr\source\repos\Proyecto3_Lenguajes\Views\IniciarSesion\Index.cshtml"
  
    ViewData["Title"] = "Iniciar Sesión";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"

<div class=""row jumbotron"" style=""background-image: url('img/gym1.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center;"">
    <div class=""col-md-6 text-white text-center"" style=""margin-top: 4em;"">
        <h1>E-Wellness</h1>
        <legend>Para iniciar sesi&oacute;n, ingrese el nombre de su Centro de Entrenamiento o el correo electr&oacute;nico con el que se registr&oacute;</legend>
    </div>
    <div class=""col-md-6"">
        <div class=""row"">
            <div id=""CTA"" class=""col-md-10 text-center rounded"" style="" background-color: #ffffff; margin-top: 4em; margin-bottom: 4em;"">
                <input id=""bussinesEmail"" type=""text"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Correo Electrónico"">
                <input id=""bussinesPass"" type=""password"" class=""form-control"" style=""margin-top: 1em;"" placeholder=""Contraseña"">
                <a class=""btn btn-outline-primary"" onclick=""btnIniciarSesion()"" style=""margin-top: 1em; margin-bottom: 2em");
            WriteLiteral("\"> Iniciar Sesi&oacute;n </a>\r\n            </div>\r\n            <div class=\"col-md-2\"></div>\r\n        </div>\r\n    </div>\r\n</div>");
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
