<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/conversations">
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
            </head>

            <body class="min-vh-100">
                <!--.container-fluid>.row>.col-4+.col-8-->
                <div class="container-fluid min-vh-100 ">
                    <div class="d-flex flex-row">
                        <div class=" bg-success col-3">

                            <!--.container-fluid.row>(.col-4>.nav.flex-column.bg-dark)+.col-8-->
                            <div class="container-fluid pe-0">
                                <div class="d-flex flex-row min-vh-100 ">
                                    <div class="col-2 bg-dark rounded-pill ">

                                        <!--(div>a.nav-link[href=#])*4-->
                                        <div class="pt-2 px-1">
                                            <a href="#" class="nav-link">
                                                <img src="../src/layout/assets/images/M.png" alt="Menu" />
                                            </a>
                                        </div>
                                        <div class="pt-5 px-1">
                                            <a href="#" class="nav-link">
                                                <img src="../src/layout/assets/images/bubble.png" alt="Chat with people" />
                                            </a>
                                        </div>
                                        <div class="pt-2 px-1">
                                            <a href="#" class="nav-link">
                                                <img src="../src/layout/assets/images/people.png" alt="Go to groups" />
                                            </a>
                                        </div>
                                        <div class="position-absolute bottom-0 pb-2 px-1">
                                            <a href="#" class="nav-link ">
                                                <img src="../src/layout/assets/images/moon.png" alt="Moon" />
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-10">
                                        <!--.row>(.col-auto>p.fw-folder{Messages})+.col-auto-->
                                        <nav class="nav ps-3 pt-2">
                                            <div class="col-auto">
                                                <span class="fw-bolder">Messages</span>
                                            </div>

                                            <div class="col-auto ps-1">
                                                <img src="../src/layout/assets/images/circle.png" alt="Notifications" />

                                            </div>
                                        </nav>
                                        <!--nav.nav>a.nav-link.fw-bolder.text-decoration-underline.text-dark[href=#]{Recent}+a.nav-link.fw-bolder.text-dark[href=#]{Pinned}-->
                                        <nav class="nav pb-2">
                                            <a href="#" class="nav-link fw-bolder text-decoration-underline text-dark">Recent</a>
                                            <a href="#" class="nav-link fw-bolder text-dark">Pinned</a>
                                        </nav>

                                        <!--.row.bg-secondary>.col-2+.col-10>div>div>strong.mr-auto{Nix Golddigger}+small{2h ago}^div{Second sample message}-->

                                        <xsl:for-each select="conversation">
                                            <div class="pb-2 position-relative">
                                                <div class="d-flex flex-row bg-secondary">
                                                    <div class="col-2 position-relative">
                                                        <img class="position-absolute top-50 start-50 translate-middle" src="../src/layout/assets/images/profile_pic.png" alt="Profile picture" />
                                                    </div>
                                                    <div class="col-10">
                                                        <div>
                                                            <div>
                                                                <strong class="mr-auto">
                                                                    <xsl:value-of select="@participant" />
                                                                </strong>
                                                                <small class="position-absolute end-0">
                                                                    <xsl:value-of select="message[last()]/@timestamp" />
                                                                </small>
                                                            </div>
                                                            <div>
                                                                <xsl:value-of select="substring(message[last()]/text(),1,10)" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </xsl:for-each>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 min-vh-100 position-relative">
                            <!--nav.navbar.navbar-light.bg-secondary>form.d-flex>input.form-control.me-2+span.input-group-text"-->
                            <nav class="navbar navbar-light bg-success">
                                <div class="col-6 ">
                                    <form class="input-group">
                                        <input type="text" class="form-control rounded-pill input-sm" />
                                        <img class="input-group-text" src="../src/layout/assets/images/search.png" alt="Search" />
                                    </form>
                                </div>
                            </nav>

                            <!--.row>.col-1+.col-4+.col-4+.col-1-->
                            <div class="d-flex flex-row position-relative min-vh-75 pb-5">
                                <xsl:apply-templates select="conversation[@isActive='True']" />


                            </div>

                            <!--form.input-group>input.form-control.boder-dark+span.input-group-text-->
                            <form class="input-group  position-absolute bottom-0 p-2 pt-5">
                                <input type="text" placeholder="Type your message" class="form-control border-dark" />
                                <img class="input-group-text" src="../src/layout/assets/images/send.png" alt="Send a message" />
                                <div class="p-1">
                                    <img class="" src="../src/layout/assets/images/attachment.png" alt="Choose a file" />
                                </div>
                                <div class="p-1">
                                    <img class="" src="../src/layout/assets/images/photo.png" alt="Choose a photo" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>

        </html>
    </xsl:template>
    <xsl:template match="conversation[@isActive='True']">
        <div class="col-1">
            <img class="position-absolute bottom-50 ps-5 pb-5" src="../src/layout/assets/images/profile_pic.png" alt="Profile picture" />
        </div>
        <div class="col-10">

            <xsl:apply-templates select="message" />


        </div>


        <div class="col-1">
            <img class="position-absolute bottom-50 ps-3" src="../src/layout/assets/images/profile_pic.png" alt="Profile picture" />
        </div>
    </xsl:template>

    <xsl:template match="message">
        <xsl:choose>
            <xsl:when test="@type='received'">
                <div class="col-4">
                    <div class="card bg-secondary ">
                        <div class="card-body">
                            <xsl:value-of select="." />
                        </div>
                    </div>

                </div>
            </xsl:when>
            <xsl:otherwise>
                <div class="col-4 offset-md-8">
                    <div class="card bg-secondary ">
                        <div class="card-body">
                            <xsl:value-of select="." />
                        </div>
                    </div>
                </div>
            </xsl:otherwise>
        </xsl:choose>

    </xsl:template>


</xsl:stylesheet>