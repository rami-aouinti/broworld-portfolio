<?php

declare(strict_types=1);

namespace App\Service;

use jonasarts\Bundle\TCPDFBundle\TCPDF\TCPDF;

class PdfService
{

    private readonly TCPDF $pdf;

    /**
     * @param TCPDF $pdf
     */
    public function __construct(TCPDF $pdf)
    {
        $this->pdf = $pdf;
    }


    public function generatePdf($html, $username)
    {

        $this->pdf->SetCreator(PDF_CREATOR);
        $this->pdf->SetAuthor('Mohamed Rami Aouinti');
        $this->pdf->SetTitle('BroWorld Resume');
        $this->pdf->SetSubject('Resume Application');
        $this->pdf->SetKeywords('TCPDF, PDF, Symfony, BroWorld');
        $this->pdf->setPrintHeader(false);
        $this->pdf->setPrintFooter(false);
        $this->pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

        $this->pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $this->pdf->SetMargins(0, 0, 0, true);
        //$this->pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
        $this->pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
        $this->pdf->setFontSubsetting(true);
        $this->pdf->SetFont('dejavusans', '', 14, '', true);
        $this->pdf->AddPage();
        $bMargin = $this->pdf->getBreakMargin();
        // get current auto-page-break mode
        // disable auto-page-break
        $this->pdf->Rect(0, 0, $this->pdf->getPageWidth(),    $this->pdf->getPageHeight(), 'DF', "",  array(224,221,221));
        $this->pdf->SetAutoPageBreak(true, $bMargin);
        // set the starting point for the page content
        $this->pdf->setPageMark();
        $this->pdf->setTextShadow(array('enabled'=>true, 'depth_w'=>0.2, 'depth_h'=>0.2, 'color'=>array(196,196,196), 'opacity'=>1, 'blend_mode'=>'Normal'));
        $this->pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
        $this->pdf->Output('resume-' . $username . '.pdf', 'I');
    }
}
