/**
 * Object.assign() polyfill for IE11
 * @see <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign>
 */
if (typeof Object.assign != "function") {
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        "use strict";
        if (target == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
}



window.CookieConsent.init({
    modalMainTextMoreLink: null,
    barTimeout: 1000,
    theme: {
        barColor: '#FFF',
        barTextColor: '#717171',
        barMainButtonColor: '#000',
        barMainButtonTextColor: '#FFF',
        modalMainButtonColor: '#000',
        modalMainButtonTextColor: '#FFF',
    },
    language: {
        current: 'de',
        locale: {
            de: {
                barMainText: 'Wir nutzen Cookies, um die Nutzerfreundlichkeit und das Nutzererlebnis fortlaufend zu optimieren. Um unsere Webseite weiterhin nutzen zu können, bestätigen Sie bitte, dass Sie damit einverstanden sind.',
                barLinkSetting: 'Cookie-Einstellungen',
                barBtnAcceptAll: 'Alle akzeptieren',
                modalMainTitle: 'Cookie-Einstellungen',
                modalMainText: 'Wir nutzen Cookies, um die Nutzerfreundlichkeit und das Nutzererlebnis fortlaufend zu optimieren. Um unsere Webseite weiterhin nutzen zu können, bestätigen Sie bitte, dass Sie damit einverstanden sind.',
                modalBtnSave: 'Einstellungen speichern',
                modalBtnAcceptAll: 'Alle akzeptieren',
                modalAffectedSolutions: 'Betroffene Anwendungen:',
                learnMore: 'Learn More',
                on: 'An',
                off: 'Aus',
            }
        }
    },
    categories: {
        necessary: {
            needed: true,
            wanted: true,
            checked: true,
            language: {
                locale: {
                    de: {
                        name: 'Essenziell',
                        description: 'Essenzielle Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich.',
                    },
                }
            }
        },
        stat: {
            needed: false,
            wanted: false,
            checked: false,
            language: {
                locale: {
                    de: {
                        name: 'Statistiken',
                        description: 'Statistik Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website nutzen.',
                    },
                }
            }
        },
        marketing: {
            needed: false,
            wanted: false,
            checked: false,
            language: {
                locale: {
                    de: {
                        name: 'Marketing',
                        description: 'Marketing-Cookies werden von Drittanbietern oder Publishern verwendet, um personalisierte Werbung anzuzeigen. Sie tun dies, indem sie Besucher über Websites hinweg verfolgen.',
                    },
                }
            }
        },
    },
    services: {
        analytics: {
            category: 'stat',
            type: 'dynamic-script',
            search: 'google-analytics',
            cookies: [
                {
                    name: '_gid',
                    domain: '.${window.location.hostname}'
                },
                {
                    name: /^_ga/,
                    domain: '.${window.location.hostname}'
                }
            ],
            language: {
                locale: {
                    de: {
                        name: 'Google Analytics'
                    },
                }
            }
        },
        gtm: {
            category: 'stat',
            type: 'script-tag',
            cookies: [
                {
                    name: /^_gat_(.+)/,
                    domain: '.${window.location.hostname}'
                }
            ],
            language: {
                locale: {
                    de: {
                        name: 'Google Tag Manager'
                    },
                }
            }
        },
        lit: {
            category: 'marketing',
            type: 'dynamic-script',
            search: 'lms-analytics',
            cookies: [
                {
                    name: /^li_at/,
                    domain: '.www.linkedin.com'
                },
                {
                    name: /^sl/,
                    domain: '.www.linkedin.com'
                },
                {
                    name: /^JSESSIONID/,
                    domain: '.www.linkedin.com'
                },
                {
                    name: /^bscookie/,
                    domain: '.www.linkedin.com'
                },
                {
                    name: /^PLAY_SESSION/,
                    domain: 'www.linkedin.com'
                },
                {
                    name: /^lil-lang/,
                    domain: 'www.linkedin.com'
                },
                {
                    name: /^lidc/,
                    domain: '.linkedin.com'
                },
                {
                    name: /^lang/,
                    domain: '.linkedin.com'
                },
                {
                    name: /^bcookie/,
                    domain: '.linkedin.com'
                },
                {
                    name: /^li_oatml/,
                    domain: '.linkedin.com'
                },
                {
                    name: /^UserMatchHistory/,
                    domain: '.linkedin.com'
                },
                {
                    name: /^lang/,
                    domain: '.ads.linkedin.com'
                },
            ],
            language: {
                locale: {
                    de: {
                        name: 'LinkedIn Insight Tag'
                    },
                }
            }
        },
    }
});