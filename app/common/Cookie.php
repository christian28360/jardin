<?php

namespace app\common;

/**
 * Represents a cookie.
 *
 * @author Johannes M. Schmitt <schmittjoh@gmail.com>
 */
class Cookie {

    protected $name;
    protected $value;
    protected $domain;
    protected $expire;
    protected $path;
    protected $secure;
    protected $httpOnly;

    /**
     * Constructor.
     *
     * @param string                                  $name     The name of the cookie
     * @param string                                  $value    The value of the cookie
     * @param int|string|\DateTime|\DateTimeInterface $expire   The time the cookie expires
     * @param string                                  $path     The path on the server in which the cookie will be available on
     * @param string                                  $domain   The domain that the cookie is available to
     * @param bool                                    $secure   Whether the cookie should only be transmitted over a secure HTTPS connection from the client
     * @param bool                                    $httpOnly Whether the cookie will be made accessible only through the HTTP protocol
     *
     * @throws \InvalidArgumentException
     */
    public function __construct($name, $value = null, $expire = 0, $path = '/', $domain = null, $secure = false, $httpOnly = true) {
        // from PHP source code
        if (preg_match("/[=,; \t\r\n\013\014]/", $name)) {
            throw new \InvalidArgumentException(sprintf('Le nom du cookie "%" contient des charactères invalides.', $name));
        }

        if (empty($name)) {
            throw new \InvalidArgumentException('Le nom du cookie ne doit pas être vide.');
        }

        // convert expiration time to a Unix timestamp
        if ($expire instanceof \DateTime || $expire instanceof \DateTimeInterface) {
            $expire = $expire->format('U');
        } elseif (!is_numeric($expire)) {
            $expire = strtotime($expire);

            if (false === $expire || -1 === $expire) {
                throw new \InvalidArgumentException('The cookie expiration time is not valid.');
            }
        }

        $this->name = $name;
        $this->value = $value;
        $this->domain = $domain;
        $this->expire = $expire;
        $this->path = empty($path) ? '/' : $path;
        $this->secure = (bool) $secure;
        $this->httpOnly = (bool) $httpOnly;
    }

    /**
     * Returns the cookie as a string.
     *
     * @return string The cookie
     */
    public function __toString() {
        $str = urlencode($this->getName()) . '=';

        if ('' === (string) $this->getValue()) {
            $str .= 'deleted; expires=' . gmdate('D, d-M-Y H:i:s T', time() - 31536001);
        } else {
            $str .= urlencode($this->getValue());

            if ($this->getExpiresTime() !== 0) {
                $str .= '; expires=' . gmdate('D, d-M-Y H:i:s T', $this->getExpiresTime());
            }
        }

        if ($this->path) {
            $str .= '; path=' . $this->path;
        }

        if ($this->getDomain()) {
            $str .= '; domain=' . $this->getDomain();
        }

        if (true === $this->isSecure()) {
            $str .= '; secure';
        }

        if (true === $this->isHttpOnly()) {
            $str .= '; httponly';
        }

        return $str;
    }

    public function setCookie($param) {
        setcookie($param);
//        setcookie('jardin_visites_cptr');
//        		setcookie( 'jardin_visites_cptr', $nombre, $expire );
    }

    /**
     * Gets the name of the cookie.
     *
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Gets the value of the cookie.
     *
     * @return string
     */
    public function getValue() {
        return $this->value;
    }

    /**
     * Gets the domain that the cookie is available to.
     *
     * @return string
     */
    public function getDomain() {
        return $this->domain;
    }

    /**
     * Gets the time the cookie expires.
     *
     * @return int
     */
    public function getExpiresTime() {
        return $this->expire;
    }

    /**
     * Gets the path on the server in which the cookie will be available on.
     *
     * @return string
     */
    public function getPath() {
        return $this->path;
    }

    /**
     * Checks whether the cookie should only be transmitted over a secure HTTPS connection from the client.
     *
     * @return bool
     */
    public function isSecure() {
        return $this->secure;
    }

    /**
     * Checks whether the cookie will be made accessible only through the HTTP protocol.
     *
     * @return bool
     */
    public function isHttpOnly() {
        return $this->httpOnly;
    }

    /**
     * Whether this cookie is about to be cleared.
     *
     * @return bool
     */
    public function isCleared() {
        return $this->expire < time();
    }

    public function getCookie($name) {
        return $this->name;
    }

}
