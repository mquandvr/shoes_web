package com.shoes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author CrunchDroid
 */
@Controller
public class PageController {

    @GetMapping("/plain-page")
    public String plainPage() {
        return "plain-page";
    }
    
    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/pricing-tables")
    public String pricingTables() {
        return "pricing-tables";
    }

    @GetMapping("/layout")
    public String layout() {
        return "fragments/fragment-top-navigation";
    }

}
