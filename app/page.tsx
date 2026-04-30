import MetricsTable from "@/components/ui/metricsTable"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@ui/accordion";
import Showcase from "@/components/showcase"

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Command } from "cmdk";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  return (
    <>
    <div className="px-6 py-10 space-y-8">
        <h1 className="font-heading text-4xl lg:text-6xl leading-[1.05] tracking-tight">
          One Ring to Rule Them All
        </h1>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          <Badge
            variant="secondary"
            className="font-narrow uppercase tracking-widest text-[11px] h-auto py-1 px-2 rounded-md"
          >
            Article
          </Badge>
          <Badge
            variant="secondary"
            className="font-narrow uppercase tracking-widest text-[11px] h-auto py-1 px-2 rounded-md"          >
            Something Cool
          </Badge>
        </div>
        <span className="font-narrow text-muted-foreground text-[11px] tracking-[0.1em] uppercase whitespace-nowrap">
          Updated 21 Apr, 2026
        </span>
      </div>

      <MetricsTable metrics={[
        {label: 'text', body: '40.60', type: 'number'},
        {label: 'text', body: 'text'},
        {label: 'text', body: 'text'}
      ]} />

      <div className="typography">
        <p>
          Lorem ipsum dolor sit amet consectetur{" "}
          <strong>adipiscing elit Ut et massa mi.</strong> Aliquam in hendrerit
          urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
          quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.
        </p>
      </div>

      {/* Simple card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <CardTitle>Simple card</CardTitle>
            <Badge
              variant="outline"
              className="font-narrow uppercase tracking-[0.1em] text-[10px]"
            >
              Card Tag
            </Badge>
          </div>
          <CardDescription>
            This is a simple description of the simple card with toggle switch.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Link card */}
      <Card className="flex-row items-center gap-0 p-0 w-fit max-w-[320px]">
        <div className="w-14 h-14 m-4 rounded-xl bg-muted flex-shrink-0" />
        <div className="min-w-0 pr-4">
          <p className="font-semibold text-sm text-card-foreground leading-snug">
            Link Title
          </p>
          <p className="font-narrow text-xs text-muted-foreground truncate tracking-wide">
            https://www.supercoolwebsite.com/cool-stuff/
          </p>
        </div>
      </Card>

      {/* Content card */}
      <Card className="max-w-[480px] gap-4">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardAction className="font-narrow text-sm font-medium text-card-foreground">
            Label
          </CardAction>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardFooter className="gap-2 flex-wrap">
          <Button className="w-auto" size="lg">
            Primary
          </Button>
          <Button variant="secondary" className="w-auto" size="lg">
            Secondary
          </Button>
          <Button variant="outline" className="w-auto" size="lg">
            Outline
          </Button>
          <Button variant="magic" className="w-auto" size="lg">
            Magic
          </Button>
        </CardFooter>
      </Card>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this component?</AccordionTrigger>
          <AccordionContent>
            A collapsible accordion with animated expand/collapse and spring-animated chevron.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
    </>
  )
}
